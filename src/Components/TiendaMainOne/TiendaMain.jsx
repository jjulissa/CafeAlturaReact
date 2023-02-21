import { useContext } from "react";
import { CoffeContext } from '../../App.js'; 
import TiendaMainOne from './TiendaMainOne.jsx' 


export default function QuantityCoffe() {
    
    const {coffe} = useContext(CoffeContext)

    return ( 

        <section className='flex flex-col items-center gap-10 p-10 flex-wrap'> 
            <h1 className="text-2xl text-verde drop-shadow-txtShaNew">Últimos orígenes</h1>
                
                <div className="flex justify-center items-center gap-6 flex-wrap"> 
                    { 
                        coffe.map((cof, i) => { 
                            return <TiendaMainOne
                            imgCoffe = {cof.img_url}
                            TitleCoffe = {cof.brand} 
                            PriceCoffe = {cof.price} 
                            key={cof._id} 
                            />
                        })   
                    } 
                </div> 
        </section> 
  
    )
}