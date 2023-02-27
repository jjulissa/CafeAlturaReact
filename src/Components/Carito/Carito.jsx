import iconCarito from "../../assets/Carito.png" 
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CoffeContext } from "../../App"

export default function Carito() { 

    const {product} = useContext(CoffeContext)
    
    function cesta() { 
        let sum = product.reduce((acc, element) => { 
           return acc += element.quantity  
        }, 0) 

        return sum
    } 

    return ( 
        <div> 
            <Link to='Cesta' className="flex"> 
                <img className=""  src={iconCarito} alt="iconCarito" /> 
                <span>{cesta()}</span>
           </Link>
        </div>
    )
}