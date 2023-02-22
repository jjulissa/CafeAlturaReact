import { useState } from 'react';
import Button from '../Button/Button.jsx' 


export default function Novedades({imgCoffe, TitleCoffe, PriceCoffe}) {  

    const [product, setProduct] = useState([]); 

    function add(event, imgCoffe, TitleCoffe, PriceCoffe) {
        event.preventDefault(); 
        setProduct( 
            { 
                imgCoffe: imgCoffe, 
                TitleCoffe: TitleCoffe, 
                PriceCoffe: PriceCoffe, 
            }
        ) 

    } 

    console.log(product);

    return ( 
            <article className=" hover:bg-gray-50 p-6 shadow-boxShaGris border border-colorBorder rounded-lg flex w-72 flex-col justify-center gap-6 items-center"> 
                <img src={imgCoffe} alt="url" />
                <div className='flex gap-3 flex-col justify-center items-center'>
                    <h3>{TitleCoffe}</h3>
                    <p>{PriceCoffe}</p>
                </div> 
                <Button onClick={(event) => {add(event, imgCoffe, TitleCoffe, PriceCoffe)}}
                    bgColor="bg-verde"
                    textColor='text-white'
                    TextButton= "Añadir"/>
            </article>  
    )
    
} 


