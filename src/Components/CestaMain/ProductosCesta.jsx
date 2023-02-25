import { CoffeContext } from "../../App";
import Menos from '../../assets/men.png' 
import Mas from '../../assets/mas.png'  
import { useContext } from 'react';  


export default function ProductoCesta({imgCoffe, TitleCoffe, PriceCoffe, quantity}) {
       
    const { setProduct} = useContext(CoffeContext) 
    
    
    function mas(event) { 
        setProduct(prev => {
            const prevContainer = [...prev] 
            const index = prevContainer.findIndex(element => { 
                return element.TitleCoffe === TitleCoffe 
            }) 
                prevContainer[index].quantity += 1 

            return prevContainer
        })  
    } 

    function menos(event) {
         setProduct(prev => {
            const prevContainer = [...prev] 
            const index = prevContainer.findIndex(element => { 
                return element.TitleCoffe === TitleCoffe 
            }) 
                prevContainer[index].quantity -= 1 

                if (prevContainer[index].quantity <= 0) {
                    return prevContainer.filter((element, i) => { 
                        return element.quantity > 0
                    })
                }

            return prevContainer
        })  
    }

    return ( 
        <> 
            <article className="flex gap-6"> 
                <div className="flex items-center gap-2"> 

                <div className="flex items-center gap-2"> 
                    <img onClick={menos} 
                        src={Menos} alt="img" />
                    <p className='w-6 h-6 rounded-full text-verde bg-cesta flex flex-col justify-center items-center'>{quantity}</p> 
                    <img onClick={mas}  
                        src={Mas} alt='img' />
                </div>  

                </div>  
                <img className='w-5 h-14' src={imgCoffe} alt="" />
                <div> 
                    <p className='text-sm font-semibold text-black'> {TitleCoffe}</p> 
                    <p>Paquete de café, 250 gr</p>
                </div> 
                <p className='pl-60  text-lg font-semibold'>{PriceCoffe * quantity}, 00 €</p> 
            </article> 
        </>
    )
}
