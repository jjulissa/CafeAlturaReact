import iconCarito from "../../assets/Carito.png" 
import { Link } from "react-router-dom"

export default function Carito() {
    

    return ( 
        <div> 
            <Link to='Cesta'> 
                <img className="" src={iconCarito} alt="iconCarito" /> 
                <span></span>
           </Link>
        </div>
    )
}