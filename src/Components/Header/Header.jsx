import Logo from "../LogoHeader/LogoHeader.jsx" 
import NavLink from "../NavLinkHeader/NavLink.jsx" 
import ContactHead from "../ContactHeader/ContactHeader.jsx"  
import Button from "../Button/Button.jsx"  
import Carito from "../Carito/Carito.jsx" 


export default function Header() {
    

    return ( 
        <div className="flex font-fontFam no-underline h-16 bg-black text-white justify-around items-center"> 
            <Logo />
            <NavLink /> 
            <ContactHead /> 
            <Button  
            bgColor="bg-gris"
            textColor='text-white'
            TextButton= "Iniciar Sesión"/>  
            <Carito />
        </div>
    )
} 

