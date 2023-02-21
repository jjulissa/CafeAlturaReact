import { Link } from "react-router-dom";


export default function Check() {
    

    return ( 
        <> 
            <main>
                <section> 
                    <h1>Checkout</h1>
                    <article>
                        <div>
                            <p>Seleccionar método de pago</p>
                            <article> 
                                <input type="radio" />
                                <div> 
                                    <p>Tarjeta de débito</p>
                                    <p>Opción estándar sin seguimiento</p>
                                </div>
                                <p>GRATIS</p>
                            </article>

                            <article>
                                <div>
                                    <label for="titular">Titular</label> 
                                    <input type="text" placeholder="Nombre del titular" required/>
                                </div>

                                <div>
                                    <label>Número de la tarjeta</label> 
                                    <input type="text"  placeholder="1234 1234 1234 1234" required/>
                                </div>

                                <div>
                                    <section>
                                        <label for="FechaCaducidad">Fecha de caducidad</label> 
                                        <input type="text" required/>
                                    </section>

                                    <section>
                                        <label for="CVC">CVC</label> 
                                        <input type="number" placeholder="123" required />
                                    </section>
                                </div>
                            </article>

                            <hr />

                            <article>
                                <div> 
                                    <p>Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                                    <p>Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                                </div>
                                    <p>9,00 €</p>
                            </article>

                            <div></div>

                            <article>
                                <div>
                                    <p>Bizum</p>
                                </div>
                                <p>9,00 €</p>
                            </article>

                            <p>Dirección de envío</p>

                            <article>

                                <div>
                                    <label for="name">Nombre</label>
                                </div>

                                <div>
                                    <label for="apellidos">Apellidos</label>
                                </div>

                                <div>
                                    <label for="name">Teléfono</label>
                                </div>

                                <div>
                                    <label for="name">Email</label>
                                </div>

                                <div>
                                    <label for="name">País</label>
                                    <select name="select" id="país" required> 
                                        <option value="seleccionar" selected>seleccionar</option>
                                        <option value="haiti">Haiti</option>
                                        <option value="espana">Espana</option>
                                        <option value="argentina">Argentina</option>
                                    </select>
                                </div>

                                <div>
                                    <article>
                                        <label for="población">Población</label>
                                    </article>

                                    <article>
                                        <label for="cp">CP</label>
                                    </article>
                                </div>

                                <div>
                                    <article>
                                        <label for="calle">Calle</label>
                                    </article>

                                    <article>
                                        <label for="nº">Nº</label>
                                    </article>

                                    <article>
                                        <label for="piso">Piso</label>
                                    </article>
                                    
                                    <article>
                                        <label for="puerta">Puerta</label>
                                    </article>
                                </div>
                            </article>

                        </div>


                        <div>
                            <arcticle>
                                <p>Total del carrito</p>

                                <div ></div>

                                <div>
                                    <p>SUBTOTAL</p>
                                    <p>0 €</p>
                                </div>

                                <div>
                                    <p>ENVÍO</p>
                                    <p>GRATIS</p>
                                </div>

                                <div></div>

                                <div>
                                    <p>TOTAL</p>
                                    <div>
                                        <p>0 €</p>
                                        <p>Incluye 3,78€ de IVA</p>
                                    </div>
                                </div>
                            </arcticle>
                            <arcticle>
                                <Link to='/Succes'>Pagar y realizar pedido</Link>
                            </arcticle> 
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}