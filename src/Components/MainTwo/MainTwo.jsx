import Recibido from "../../assets/IconRecibido.png" 
import Envio from "../../assets/IconEnvio.png"
import Descuento from "../../assets/IconBeneficiosDescuentos.png"
// import imgMainTwo from "../../assets/BackgroundMain.png"


export default function MainTwo() {
    

    return ( 
        <section className='flex justify-center py-12 px-36 items-center flex-col bg-imgMainTwo bg-no-repeat bg-cover bg-center gap-6'>
            <h2 className="text-white font-medium text-2xl text-center">Café con las mejores condiciones</h2>
            <article className="flex gap-6 justify-center items-center">
                <div className="bg-white h-56 shadow-boxShaGris w-1/3 flex flex-col rounded-lg p-2.5 justify-center items-center gap-4 ">
                    <picture className="bg-verde rounded-2xl h-16 flex justify-center w-14 items-center"> 
                        <img className="w-6 h-8" src={Recibido} alt="recibido" />
                    </picture> 

                        <h2 className="font-semibold text-base text-center text-h2">Recibe tu pedido sin preocuparte</h2>
                        <p className="text-pColor text-center">
                            Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción 
                            de café, nunca te quedarás sin tu taza de la mañana. 
                        </p>
                </div>

                <div className="w-1/3 p-6 bg-white flex flex-col rounded-lg justify-center items-center gap-4 shadow-boxShaGris h-56">
                    <picture className="bg-verde rounded-2xl h-12 flex justify-center w-14 items-center"> 
                        <img className="w-6 h-6" src={Envio} alt="envio" />
                    </picture>
                    <h2 className="font-semibold text-lg text-center text-h2">Envío en 24/48h</h2>
                    <p className="text-pColor text-center">Pide tu café antes de las 12h y lo recibirás al día siguiente.</p>
                </div>

                <div className="flex p-6 w-1/3 bg-white h-56 shadow-boxShaGris flex-col rounded-lg justify-center items-center gap-4">
                    <picture className="bg-verde p-2.5 rounded-2xl h-18 flex justify-center w-14 items-center"> 
                        <img className="w-6 h-6" src={Descuento} alt="beneficio" />
                    </picture>
                    <h2 className="font-semibold text-lg text-center text-h2">Descuentos y beneficios</h2>
                    <p className="text-pColor text-center">
                        Cada dos meses, te regalamos una bolsa de un nuevo origen 
                        sorpresa, para que lo descubras junto a nosotros.
                    </p>
                </div>
            </article>
        </section>
    )
}