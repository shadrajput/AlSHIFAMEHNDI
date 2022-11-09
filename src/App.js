import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Services from './pages/Services';
import Quotation from './components/Quotation';
import Bridal from './components/Bridal';
import Figur from './components/Figur';
import Moghlai from './components/Moghlai';




const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quotation" element={<Quotation/>} />
        <Route path="/Bridal" element={<Bridal/>} />
        <Route path="/Figur" element={<Figur/>} />
        <Route path="/Moghlai" element={<Moghlai/>} />
        <Route path="/Quotation/Contact" element={<Contact/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>

    </>
  )
}

export default App