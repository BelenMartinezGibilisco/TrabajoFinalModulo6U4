import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import InfoPage from "./pages/InfoPage";
import CursosPage from "./pages/CursosPage";
import RecetasPage from "./pages/RecetasPage"
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
 
      <div className="App">
        <Header/>
     
        <BrowserRouter>
         <Nav/>
        <Routes>
        
            <Route path="/" element={<HomePage/>} />
            <Route path="nosotros" element={<NosotrosPage/>}/>
            <Route path="info" element={<InfoPage/>}/>
            <Route path="recetas" element={<RecetasPage/>}/>
            <Route path="cursos" element={<CursosPage/>}/>
            <Route path="contacto" element={<ContactoPage/>}/>
          </Routes>
        </BrowserRouter>

    <Footer/>

      </div>
    );
  }   
    
export default App;
