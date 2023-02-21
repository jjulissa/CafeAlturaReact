import { Link } from "react-router-dom";
import Button from "../Button/Button"; 
import imgSucces from '../../assets/iconSucces.png'


export default function SuccesMain() {
    

    return ( 
        <> 
            <main className="flex flex-col justify-center items-center gap-6 pb-5">
                <section className="flex flex-col justify-center items-center gap-6"> 
                    <picture className="flex justify-center p-4">
                        <img src={imgSucces} alt="" />
                    </picture>

                    <p className="text-verde text-center font-medium text-2xl">El pedido ha sido realizado con éxito</p>
                    <p className="flex w-96 text-center self-center justify-center items-center text-base font-normal">
                        El pedido #12387 se encuentra en preparación. 
                        Lo recibirás dentro de las fechas acordadas en tu envío. 
                        Hemos enviado un ticket a tu correo electrónico.
                    </p>
                </section>

                <article>                     
                    <section className="flex p-6 flex-col self-center gap-6 bg-hover rounded ">
                        <h2 className="text-lg font-semibold text-black">Tu pedido</h2>
                        <hr /> 

                        <div className="flex flex-col gap-4"> 
                            <hr />

                            <article className="flex text-sm font-semibold justify-between gap-4 text-black">
                                <p>SUBTOTAL</p>
                                <p>0 €</p>
                            </article>

                            <article className="flex text-sm font-semibold justify-between gap-4 text-black">
                                <p>ENVÍO</p>
                                <p>GRATIS</p>
                            </article>

                            <div></div>

                            <article className="flex text-sm font-semibold justify-between gap-4 text-black">
                                <p>TOTAL</p>
                                <div>
                                    <p>0 €</p>
                                    <p>Incluye 3,78€ de IVA</p>
                                </div>
                            </article>
                        </div>
                    </section>
                </article>

                <section> 
                    <button> 
                        <Link to='/Tienda'> 
                            <Button 
                                bgColor="bg-verde"
                                textColor='text-white'
                                TextButton="Volver a la tienda"
                            />
                        </Link> 
                    </button>
                </section>
            </main> 
        </>
    )
}