import { Link } from "react-router-dom";
import Menos from '../../assets/men.png' 
import Mas from '../../assets/mas.png' 
import Button from '../Button/Button'



export default function CestaMain() {
    

    return ( 
        <> 
            <main className="flex justify-content items-center flex-col gap-6 py-10 px-2.5">

                <h1 className="text-verde font-medium text-2xl">Cesta (<span>0</span>)</h1>

                <section className="flex items-center gap-8">
                    <div className="flex flex-col gap-6 p-2">
                        <p className="text-black text-lg">Productos</p> 

                    <article className="flex gap-6"> 
                        <div className="flex items-center gap-2"> 
                            <img src={Menos} alt="img" />
                            <p>1</p> 
                            <img src={Mas} alt='img' />
                        </div>  

                        <div> 
                           <p> Recevwa Array Productos yo </p> 
                        </div> 

                    </article> 
                    
                        <h2 className="text-lg font-semibold">Seleccionar envío</h2>

                        <article className="flex gap-4"> 
                            <input type="radio" className="accent-green-900"/>
                            <div className="flex flex-col gap-1">
                                <label className="text-black text-sm font-semibold">Envío 5-7 días</label>
                                <p className="text-sm text-black font-normal">Opción estándar sin seguimiento</p>
                            </div>
                            <p className="text-sm font-normal text-black pl-80">GRATIS</p>
                        </article>

                        <hr />

                        <article className="flex gap-4"> 
                            <input type="radio" className="accent-green-900"/>
                            <div className="flex flex-col gap-1">
                                <label for="envioUrgente" className="text-black text-sm font-semibold">Envío urgente 24h</label>
                                <p className="text-sm text-black font-normal">Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                            </div>
                            <p className="text-sm font-normal text-black">9,00 €</p>
                        </article>

                    </div>

                    <div className="bg-hover p-6 flex flex-col gap-4 self-start">
                        <arcticle className="flex flex-col gap-3">
                            <p className="text-black text-lg font-semibold">Total del carrito</p>
                            <hr />

                            <div className="flex gap-4 font-normal text-black justify-between text-sm">
                                <p>SUBTOTAL</p>
                                <p>0 €</p>
                            </div>

                            <div className="flex gap-4 font-normal text-black justify-between text-sm">
                                <p>ENVÍO</p>
                                <p >GRATIS</p>
                            </div>

                            <hr />

                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-black text-sm">TOTAL</p>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-black text-sm text-right">0 €</p>
                                    <p className="text-right text-xs text-gris font-normal">Incluye 3,78€ de IVA</p>
                                </div>
                            </div>
                        </arcticle>

                        <arcticle className="flex gap-4" >
                            <Link to="/Checkout"> 
                                <Button 
                                    TextButton="Ir a checkout" 
                                    bgColor="bg-verde"
                                    textColor='text-white'
                                />
                            </Link> 
            
                            <Link to="/Tienda">  
                                <Button 
                                    TextButton="Seguir comprando" 
                                    textColor='text-verde'
                                />    
                            </Link>
                        </arcticle>
                    </div>

                </section>
            </main>
        </>
    )
}