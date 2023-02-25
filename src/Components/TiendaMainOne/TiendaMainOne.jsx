import { useContext } from "react"
import { CoffeContext } from "../../App" 


export default function Novedades({imgCoffe, TitleCoffe, PriceCoffe, quantity }) { 

    const {product, setProduct } = useContext(CoffeContext); 

    function add(e) {
        
        setProduct(prev => {
            const prevContainer = [...prev] 
            const index = prevContainer.findIndex(element => { 
                return element.TitleCoffe === TitleCoffe 
            }) 

            if (index === -1) {
                prevContainer.push( 
                    { 
                        imgCoffe: imgCoffe, 
                        TitleCoffe: TitleCoffe, 
                        PriceCoffe: PriceCoffe,  
                        quantity: 1 
                    }
                )
            } else { 
                prevContainer[index].quantity += 1 
            }

            return prevContainer
        })  

    } 

    return ( 
            <article className=" hover:bg-gray-50 p-6 shadow-boxShaGris border border-colorBorder rounded-lg flex w-72 flex-col justify-center gap-6 items-center"> 
                <img src={imgCoffe} alt="url" />
                <div className='flex gap-3 flex-col justify-center items-center'>
                    <h3>{TitleCoffe}</h3>
                    <p>{PriceCoffe}</p>
                </div> 
                <button 
                    onClick={add}
                    className={`bg-verde text-white py-3 font-fontFam px-6 shadow-boxSha justify-center items-center rounded  border-none `}>Añadir</button> 
            </article>  
    )    
}