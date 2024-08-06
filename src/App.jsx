import Footer from "./componentes/Footer"
import GlobalStyles from "./componentes/GlobalStyle"
import Header from "./componentes/Header"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pg404 from "./pages/404"
import CrearVideo from "./pages/CrearVideo";
import { useEffect, useState } from "react";

function App() {

  const[btnHome, setBtnHome] = useState()

  const verValor = (valor)=>{
    setBtnHome(valor)
    console.log("valor: ");
    console.log(valor);
    return btnHome
  }


  return (
    <Router>
      <GlobalStyles/>
      <Header estadoBotonHome={verValor}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/NuevoVideo" element={<CrearVideo/>}/>
          <Route path="/*" element={<Pg404/>}/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App