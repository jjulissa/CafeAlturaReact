import imgPreguntasMas from '../../assets/IconPreguntasMas.png' 
import flecha from '../../assets/IconFlechas.png'
import imgPreguntasMenos from '../../assets/IconPreguntasMenos.png' 
import { useState } from 'react'


export default function Preguntas() { 

    const [btnState, setBtnState] = useState(false) 

    function handleClick() {
        return setBtnState(prev => !prev); 

    } 

    const [btnStateOne, setBtnStateOne] = useState(false) 

    function handleClickOne() {
        return setBtnStateOne(prev => !prev); 

    } 

    const [btnStateTwo, setBtnStateTwo] = useState(false) 

    function handleClickTwo() {
        return setBtnStateTwo(prev => !prev); 

    }


    return ( 
        <section className="flex p-12 justify-center flex-col bg-verde gap-6 items-center">
            <p className="text-white text-2xl">Preguntas frecuentes</p>
            <div className="flex flex-col gap-4 justify-center items-center">
                <article className="bg-white w-preguntasW p-6 flex-col gap-4 rounded-xl">  

                    <picture className='flex justify-between'>
                        <h2 className='text-black text-lg font-semibold'>¿Cómo hago el pedido?</h2> 
                        <img onClick={() => handleClick()}
                            className={`w-2.5 h-1.5 ${btnState? ' ' : 'rotate-180'}`} src={imgPreguntasMas} alt="img" />
                    </picture> 
                    <hr className={`text-xs ${btnState ? 'flex' : 'hidden'}`}/>
                    <p className={`text-xs ${btnState ? 'flex' : 'hidden'}`}>
                        Selecciona el café que desees probar y completa el proceso de compra. 
                        Si lo prefieres, te preguntaremos cada cuánto quieres que te 
                        lo mandemos a casa y así nunca te quedarás sin café.
                    </p>
                </article>

                <article className="bg-white w-preguntasW p-6 flex flex-col gap-4 rounded-xl ">
                    <picture className='flex justify-between'>
                        <h2 className='text-black text-lg font-semibold'>¿Por qué los precios son tan bajos?</h2> 
                        <img onClick={() => handleClickOne()}
                            className='w-2.5 h-1.5' src={imgPreguntasMas} alt="img" />
                    </picture>
                    <hr className={`text-xs ${btnStateOne ? 'flex' : 'hidden'}`}/>
                    <p className={`text-xs ${btnStateOne ? 'flex' : 'hidden'}`}>
                        Viajamos constantemente para encontrar los mejores granos 
                        y a los agricultores más exigentes. Si podemos ofrecerte 
                        estos precios es porque tratamos directamente con 
                        los productores de café, sin intermediarios. Así obtenemos 
                        el mejor precio para ti y la persona que está detrás de 
                        los granos de café recibe el mayor beneficio posible. 
                    </p>
                </article>

                <article className="bg-white w-preguntasW p-6 flex flex-col gap-4 rounded-xl " > 
                    <picture className='flex justify-between'> 
                        <h2 className='text-black text-lg font-semibold'>¿Es posible enviar café a mi oficina? </h2> 
                        <img onClick={() => handleClickTwo()} 
                            className='w-2.5 h-1.5' src={imgPreguntasMenos} alt="" /> 
                    </picture>
                    <hr className={`text-xs ${btnStateTwo ? 'flex' : 'hidden'}`}/>
                    <p className={`text-xs ${btnStateTwo ? 'flex' : 'hidden'}`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Illo atque quisquam ipsam eveniet quidem unde voluptatibus 
                        quia veniam obcaecati quis asperiores aspernatur labore praesentium 
                        quasi provident magnam officiis, dolorum exercitationem?
                        Velit asperiores tempore fugit quisquam! Quos, nostrum debitis 
                        magni vitae, excepturi alias nihil provident id quam temporibus 
                        tenetur labore facere molestiae quaerat inventore ea, voluptatem perferendis. 
                        Corporis saepe quo ipsam?
                    </p>

                </article> 
            </div> 

            <div className='flex gap-4'> 
                <p className='text-sm text-white font-semibold'>Resolvemos tus dudas</p> 
                <img className='w-2.5 h-1.5 mt-2' src={flecha} alt="" />
            </div>

        </section>
    )
}