import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home.jsx";
import Tienda from "./Components/Tienda/Tienda.jsx" 
import Header from "./Components/Header/Header.jsx"
import { useState,  useEffect, createContext } from "react";
import Cesta from './Components/Cesta/Cesta.jsx'
import Checkout from './Components/Checkout/Checkout.jsx' 
import Success from './Components/Succes/Success.jsx'



export const CoffeContext = createContext()

function App() { 

  const [coffe, setCoffe] = useState([]) 
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem("product")) || []); 
  const [cesta, setCesta] = useState(0); 
  const [total, setTotal] = useState(0) 
  const [envio, setEnvio] = useState(0) 
  
    useEffect(() => { 
        fetch("https://cafe-de-altura-api.vercel.app/api/products") 
            .then(res => res.json()) 
            .then(data => { setCoffe(data.products)
            })       
    }, []);   

    useEffect(() => { 
        localStorage.setItem("product", JSON.stringify(product));
    }, [product]);

  return (
    <div className="App"> 
      <CoffeContext.Provider value={{coffe, product, envio, setEnvio, setProduct, cesta, setCesta, total, setTotal}}> 
      <BrowserRouter > 
      <Header /> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path='Tienda' element={<Tienda />} /> 
          <Route path='Cesta' element={<Cesta />} /> 
          <Route path='Checkout' element={<Checkout />} /> 
          <Route path='Success' element={<Success />} />
        </Routes> 
      </BrowserRouter> 
      </CoffeContext.Provider> 
    </div>
  );
}

export default App; 


