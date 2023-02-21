import MainOne from "../MainOne/MainOne.jsx"
import MainTwo from "../MainTwo/MainTwo.jsx"
import QuantityCoffe from "../Novedades/QuantityCoffe.jsx"; 
import Preguntas from '../PreguntasFrecuentes/PreguntasFrecuentes.jsx';  
import CoffeShop from '../CoffeeShop/CoffeeShop.jsx'
import Formulario from "../Formulario/Formularios.jsx";
import Footer from "../Footer/Footer.jsx";

export default function HomePage() {
    

    return ( 
        <> 
            <MainOne /> 
            <MainTwo /> 
            <QuantityCoffe /> 
            <Preguntas /> 
            <CoffeShop /> 
            <Formulario /> 
            <Footer />
        </>

    ) 

}