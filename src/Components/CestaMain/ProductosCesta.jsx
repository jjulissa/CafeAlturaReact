import Menos from '../../assets/men.png' 
import Mas from '../../assets/mas.png' 


export default function ProductoCesta({imgCoffe, TitleCoffe, PriceCoffe}) {
    

    return ( 
        <> 
            <article className="flex gap-6"> 
                <div className="flex items-center gap-2"> 
                    <img src={Menos} alt="img" />
                    <p className='w-6 h-6 rounded-full text-verde bg-cesta flex flex-col justify-center items-center'>1</p> 
                    <img src={Mas} alt='img' />
                </div>  
                <img className='w-5 h-14' src={imgCoffe} alt="" />
                <div> 
                    <p className='text-sm font-semibold text-black'> {TitleCoffe}</p> 
                    <p>Paquete de café, 250 gr</p>
                </div> 
                <p className='pl-60  text-lg font-semibold'>{PriceCoffe} €</p> 
            </article> 
        </>
    )
}
