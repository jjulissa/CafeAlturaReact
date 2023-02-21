import LogoNavHeader from "../../assets/VectorTazaCafe.png"  
import { Link } from "react-router-dom" 


export default function LogoHeader() { 

    
    
    return ( 
        <>  
            <Link to="Home"> 
                <div className="flex gap-2"> 
                    <h1 className="text-2xl font-normal">cafedealtura.com</h1> 
                    <img src={LogoNavHeader} alt="logo" /> 
                </div>  
            </Link>
        </>
    )
} 
