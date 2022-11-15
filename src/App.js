import React, { useEffect } from 'react';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Contact from './components/Contact';
import Moghlai from './components/Moghlai';
import Figur from './components/Figur';
import Preloader from './components/Preloader';
import Arebic from "./components/Arebic"
import Bridal from './components/Bridal';




const App = () => {
  const [Loading, setloading] = React.useState(false)
  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])
  return (
    <>
      {
        Loading ?
          <Preloader />
          :
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Arebic" element={<Arebic />} />
            <Route path="/Moghlai" element={<Moghlai />} />
            <Route path="/Figur" element={<Figur />} />
            <Route path="/Bridal" element={<Bridal />} />
            {/* <Route path="/Arebic/Contact" element={<Contact />} /> */}
          </Routes>
      }

    </>
  )
}

export default App