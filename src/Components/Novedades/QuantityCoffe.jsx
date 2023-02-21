import { useContext } from "react";
import { CoffeContext } from '../../App.js'; 
import Novedades from './Novedades.jsx' 
import { Link } from 'react-router-dom'
import imgFlechas from '../../assets/IconFlechas.png' 

export default function QuantityCoffe({quantity}) {
    
    const {coffe} = useContext(CoffeContext)
    
    let depositoArray= coffe.slice(0, 4)

    // for (let i = 0; i < 4; i++) {
    //     if(coffe) { 
    //         depositoArray.push(coffe[i]); 
    //     }
    // }
    console.log(depositoArray);

    return ( 

        <section className='flex flex-col items-center gap-10 p-10'> 
            <h1 className="text-2xl text-verde drop-shadow-txtShaNew">Novedades</h1>
                
                <div className="flex justify-center items-center gap-6"> 
                    { 
                        depositoArray.map((cof, i) => { 
                            return <Novedades
                            imgCoffe = {cof.img_url}
                            TitleCoffe = {cof.brand} 
                            PriceCoffe = {cof.price} 
                            key={cof._id} 
                            />
                        })   
                    } 
                </div> 

            <div className="flex justify-center items-center gap-3"> 
                <Link className="text-sm" to="tienda">Ver todos</Link> 
                <img src={imgFlechas} alt="img" />
            </div>
        </section> 

        
        
    )

}