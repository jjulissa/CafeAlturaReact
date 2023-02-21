import Button from '../Button/Button.jsx'  
import ImgMainOne from '../../assets/HeroimageHeader.jpeg' 
// import Tienda from '../Tienda/Tienda.jsx' 

export default function MainOne() {
    
    const click = (event) => { 
       

    }


    return ( 
        <main className='flex justify-center py-12 px-10 gap-6 w-full'> 
            <article className='flex flex-col gap-4 pt-32 px-0'> 
                <h2 className='text-verde'>De la planta a tu taza</h2>
                <h1 className='text-black font-semibold text-4xl'>El mejor café del mundo, ahora en tu casa.</h1>
                <p className='text-black font-normal text-sm'>
                    Trabajamos con agricultores de todo el mundo para seleccionar los mejores 
                    granos de café y que puedas viajar desde la comodidad de tu hogar.
                </p>

                <div className='flex gap-2 items-start'>
                    <Button 
                    bgColor="bg-black"
                    textColor='text-white'
                    TextButton="Descubrir orígenes"/>
                    <Button 
                    onClick={click}
                    TextButton="Comprar café" 
                    bgColor="bg-verde"
                    textColor='text-white'/>
                </div>
            </article> 

            <article> 
                <img className='w-full h-96' src={ImgMainOne} alt="img" />   
            </article>
        </main>
    )
}