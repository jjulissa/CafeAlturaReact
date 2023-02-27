import { useContext } from "react";
import { Link } from "react-router-dom";
import { CoffeContext } from "../../App";
import Button from '../Button/Button'
import ProductoCesta from "./ProductosCesta"; 



export default function CestaMain(PriceCoffe) { 
    
    const {product} = useContext(CoffeContext); 
    const {envio, setEnvio} = useContext(CoffeContext)   
    // const {cesta, setCesta} = useContext(CoffeContext)
    
    function total(product) { 
        let sum = product.reduce((acc, element) => { 
           return acc += element.PriceCoffe * element.quantity 
        }, 0) 

        return sum
    } 

    function cesta() { 
        let sum = product.reduce((acc, element) => { 
           return acc += element.quantity  
        }, 0) 

        return sum
    } 

    function envios(event) {
        setEnvio(Number(event.target.value))
    }

    return ( 
        <> 
            <main className="flex justify-content items-center flex-col gap-6 py-10 px-2.5">

                <h1 className="text-verde font-medium text-2xl">Cesta (<span>{cesta()}</span>)</h1>

                <section className="flex items-center gap-8">
                    <div className="flex flex-col gap-6 p-2">
                        <p className="text-black text-lg">Productos</p> 

                    {  
                    product.length === 0 ? 
                        <p> You have nothing in the CART!!! </p> : 
                        product.map((coffe, i) => { 
                            return <ProductoCesta 

                                key={coffe._id} 
                                imgCoffe={coffe.imgCoffe} 
                                TitleCoffe={coffe.TitleCoffe} 
                                PriceCoffe={coffe.PriceCoffe}  
                                quantity = {coffe.quantity}
                            /> 
                        }) 
                    }
                    
                        <h2 className="text-lg font-semibold">Seleccionar envío</h2>

                        <article className="flex gap-4"> 
                            <input 
                                value={0}
                                onClick={envios}
                                type="radio" id='envio' name="envio" className="accent-green-900"/>
                            <div className="flex flex-col gap-1">
                                <label className="text-black text-sm font-semibold">Envío 5-7 días</label>
                                <p className="text-sm text-black font-normal">Opción estándar sin seguimiento</p>
                            </div>
                            <p className="text-sm font-normal text-black pl-80">GRATIS</p>
                        </article>

                        <hr />

                        <article className="flex gap-4"> 
                            <input 
                                value={9}
                                onClick={envios}
                                type="radio" id='envio' name="envio" className={`accent-green-900`}/>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="envioUrgente" className="text-black text-sm font-semibold">Envío urgente 24h</label>
                                <p className="text-sm text-black font-normal">Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                            </div>
                            <p className="text-sm font-normal text-black">9,00 €</p>
                        </article>

                    </div>

                    <div className="bg-hover p-6 flex flex-col gap-4 self-start">
                        <article className="flex flex-col gap-3">
                            <p className="text-black text-lg font-semibold">Total del carrito</p>
                            <hr />

                            <div className="flex gap-4 font-normal text-black justify-between text-sm">
                                <p>SUBTOTAL</p>
                                <p>{total(product)}, 00 €</p>
                            </div>

                            <div className="flex gap-4 font-normal text-black justify-between text-sm">
                                <p>ENVÍO</p>
                                <p>{envio}, 00 €</p>
                            </div>

                            <hr />

                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-black text-sm">TOTAL</p>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-black text-sm text-right">{(total(product) + envio) }, 00 €</p>
                                    <p className="text-right text-xs text-gris font-normal">Incluye 3,78€ de IVA</p>
                                </div>
                            </div>
                        </article>

                        <article className="flex gap-4" >
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
                        </article>
                    </div>

                </section>
            </main>
        </>
    )
}