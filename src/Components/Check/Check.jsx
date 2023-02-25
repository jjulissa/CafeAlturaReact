import { Link } from "react-router-dom";
import Bizum from '../../assets/Bizum.png' 
import Button from '../Button/Button.jsx'; 
import { useContext } from "react";
import { CoffeContext } from '../../App.js'; 


export default function Check() {
    
    const {product} = useContext(CoffeContext);  

    function total(product) {
        let sum = product.reduce((acc, element) => { 
           return acc += element.PriceCoffe * element.quantity 
        }, 0) 

        return sum
    } 

    return ( 
        <> 
            <main>
                <section className="flex flex-col gap-6 flex-wrap p-10"> 
                    <h1 className="text-center text-2xl font-medium text-verde">Checkout</h1>
                    <article className="flex gap-6 p-2">
                        <div>
                            <p className="text-lg p-2 font-semibold">Seleccionar método de pago</p>
                            <article className="flex gap-4 p-2"> 
                                <input type="radio" className="accent-green-900"/>
                                <div className="flex flex-col pr-10 gap-1"> 
                                    <p className="text-black text-xs font-semibold">Tarjeta de débito</p>
                                    <p className="text-xs font-extralight">Opción estándar sin seguimiento</p>
                                </div>
                                <p className="blur-2xl">GRATIS</p>
                            </article>

                            <article className="flex flex-col gap-2 p-2 pb-5">
                                <div className="flex flex-col gap-1 text-black text-xs font-normal">
                                    <label for="titular">Titular</label> 
                                    <input className="border w-72 rounded border-input" type="text" placeholder="Nombre del titular" required/>
                                </div>

                                <div className="flex flex-col gap-1 text-black text-xs font-normal">
                                    <label>Número de la tarjeta</label> 
                                    <input type="text" className="w-72 border rounded border-input" placeholder="1234 1234 1234 1234" required/>
                                </div>

                                <div className="flex gap-2 text-black text-xs font-normal">
                                    <section className="flex flex-col">
                                        <label for="FechaCaducidad">Fecha de caducidad</label> 
                                        <input type="text" placeholder=" MM / YY" className="border rounded border-input" required/>
                                    </section>

                                    <section className="flex flex-col">
                                        <label for="CVC">CVC</label> 
                                        <input type="number" className="border rounded border-input" placeholder="123" required />
                                    </section>
                                </div>
                            </article>

                            <hr />

                            <article className="flex gap-4 p-2 pt-5"> 
                                <input type="radio" className="accent-green-900"/>
                                <div> 
                                    <p className="text-black text-xs font-semibold">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                                    <p className="text-xs font-extralight">Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                                </div>
                                    <p className="blur-2xl">9,00 €</p>
                            </article>

                            <div></div>

                            <article className="flex gap-4 p-2">
                                <div className="flex text-sm items-center gap-4 font-semibold"> 
                                    <input type="radio" className="accent-green-900"/>
                                    <p>Bizum</p> 
                                    <img className="w-14 h-6" src={Bizum} alt="Bizum" />
                                </div>
                                <p>9,00 €</p>
                            </article>

                            <p className="font-semibold text-base p-2.5">Dirección de envío</p>

                            <article className="flex flex-col gap-2 pl-2">

                                <div className="flex flex-col gap-1 text-xs font-normal text-black">
                                    <label for="name">Nombre</label> 
                                    <input className="border rounded border-input" type="text" placeholder="Nombre" required/>
                                </div>

                                <div className="flex flex-col gap-1 text-xs font-normal text-black">
                                    <label for="apellidos">Apellidos</label> 
                                    <input className="border rounded border-input" type="text" placeholder="Apellido" required/>
                                </div>

                                <div className="flex flex-col gap-1 text-xs font-normal text-black">
                                    <label for="name">Teléfono</label> 
                                    <input className="border rounded border-input" type="tel" placeholder="+34 600 6000 600" required/>
                                </div>

                                <div className="flex flex-col gap-1 text-xs font-normal text-black">
                                    <label for="name">Email</label> 
                                    <input className="border rounded border-input" type="email" placeholder="Email" required/>
                                </div>

                                <div className="flex flex-col gap-1 text-xs font-normal text-black">
                                    <label for="name">País</label>
                                    <select name="select" required> 
                                        <option value="seleccionar" selected>seleccionar</option>
                                        <option value="haiti">Haiti</option>
                                        <option value="espana">Espana</option>
                                        <option value="argentina">Argentina</option>
                                    </select>
                                </div>

                                <div className="flex gap-6 text-black text-xs font-normal">
                                    <article className="flex flex-col gap-1">
                                        <label>Población</label> 
                                        <input className="border rounded border-input" type="text" placeholder="Población" required/>
                                    </article>

                                    <article className="flex flex-col gap-1">
                                        <label >CP</label> 
                                        <input className="border rounded border-input" type="text" placeholder="123" required/>
                                    </article>
                                </div>

                                <div className="flex gap-3">
                                    <article className="flex flex-col justify-start items-start">
                                        <label>Calle</label> 
                                        <input className="border rounded border-input" type="text" required/>
                                    </article>

                                    <article className="flex flex-col justify-start items-start">
                                        <label for="nº">Nº</label> 
                                        <input className="border rounded border-input" type="text" required/>
                                    </article>

                                    <article className="flex flex-col justify-start items-start">
                                        <label for="piso">Piso</label> 
                                        <input className="border rounded border-input" type="text" required/>
                                    </article>
                                    
                                    <article className="flex flex-col justify-start items-start">
                                        <label for="puerta">Puerta</label> 
                                        <input className="hover:border-gris focus:border-verde border rounded border-input" type="text" required/>
                                    </article>
                                </div>
                            </article>

                        </div>


                        <div className="bg-hover p-6 flex flex-col gap-4 self-start">
                        <arcticle className="flex flex-col gap-3">
                            <p className="text-black text-lg font-semibold">Total del carrito</p>
                            <hr />

                            <div className="flex gap-4 font-normal text-black justify-between text-sm">
                                <p>SUBTOTAL</p>
                                <p>{total(product)} €</p>
                            </div>

                            <div className="flex gap-4 font-normal text-black justify-between text-sm">
                                <p>ENVÍO</p>
                                <p>{9}, 00</p>
                            </div>

                            <hr />

                            <div className="flex justify-between gap-4">
                                <p className="font-semibold text-black text-sm">TOTAL</p>
                                <div className="flex flex-col gap-2">
                                    <p className="font-semibold text-black text-sm text-right">{(total(product)+ 9) - 3.78 } €</p>
                                    <p className="text-right text-xs text-gris font-normal">Incluye 3,78€ de IVA</p>
                                </div>
                            </div>
                        </arcticle>

                        <arcticle className="flex gap-4" >
                            <Link to="/Success"> 
                                <Button 
                                    TextButton="Pagar y realizar pedido" 
                                    bgColor="bg-verde"
                                    textColor='text-white'
                                />
                            </Link> 
                        </arcticle>
                    </div>
                    </article>
                </section>
            </main>
        </>
    )
}