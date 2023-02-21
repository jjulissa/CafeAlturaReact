import { Link } from "react-router-dom";
import imgCafe from '../../assets/VectorTazaCafe.png'
import iconCelu from '../../assets/IconCelu.png'
import imgGmail from '../../assets/IconGmail.png'


export default function Footer() {
    
    return ( 
        <> 
    <footer className="flex flex-col bg-black text-white justify-around gap-4">
        <article className="flex gap-5 flex-col p-7">
            <section className="flex text-white gap-2">
                <h2 className="pl-24 text-2xl text-">cafedealtura.com</h2> 
                <img className="w-5 h-5" src={imgCafe} alt="logo" />
            </section>

            <section className="flex gap-5 justify-around">
                <div className="flex flex-col gap-3">
                    <p>Te ayudamos en</p>
                    <picture className="flex py-2 px-3.5 bg-gris gap-2 justify-center rounded"> 
                        <img src={iconCelu} alt="icon" />
                        <p>+34 919 49 05 18</p>
                    </picture>
                    <picture className="flex py-2 px-3.5 bg-gris gap-2 justify-center rounded"> 
                        <img src={imgGmail} alt="logo" />
                        <p>hola@cafedealtura.com</p>
                    </picture>
                </div>

                <div className="text-sm gap-4 flex flex-col pt-2">
                    <Link to="/Tienda">Tienda</Link>
                    <p>Suscripción</p>
                    <p>Para empresas</p>
                    <p>Sobre nosotros</p>
                    <p>Contacto</p>
                </div>

                <div className="text-sm gap-4 flex flex-col pt-2">
                    <p>Política de privacidad</p>
                    <p>Política de cookies</p>
                    <p>Términos y condiciones</p>
                </div> 

            </section>
        </article>
        <p className="bg-h2 p-3 text-white flex justify-center items-center text-sm font-semibold">
            Todos los derechos reservados - Café de Altura SL - 2022
        </p>
    </footer>
        </>
    )
}