import React from 'react';
import Navbar_2 from '../components/Navbar_2';
import Hero from '../components/Hero';
import Services from '../pages/Services';
import Project from '../components/Project';
import Aboutus from '../components/Aboutus';
import Contact from '../components/Contact';
import Galary from '../components/Galary';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaArrowDown } from "react-icons/fa"
import Slider from "../components/Slider"
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import GoToTop from '../components/GoToTop';
import Card from '../components/Card';



const Home = () => {
    return (
        <>

            <Navbar_2 />
            <Hero />
            {/* <Link activeClass="active" to="Services" spy={true} smooth={true} offset={-55} duration={500} >
                <div className='flex justify-center relative bottom-16 xl:bottom-16 '>
                    <div className='flex justify-center w-10 h-10' >
                        <FaArrowDown className=' animate-bounce h-9 w-9  duration-200  border-2 border-[#fff] hover:text-[#571217]  rounded-full  p-2 cursor-pointer  text-white hover:border-white hover:bg-white  ' />
                    </div>
                </div>
            </Link> */}
            <Card />
            <Aboutus />
            <Connect />
            <Galary />
            <Project slides={Slider} />
            <Contact />
            <Footer />
            <GoToTop />
        </>
    )
}





export default Home



