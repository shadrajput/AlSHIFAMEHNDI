import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'







const Hero = () => {

    return (
        <div className="banner w-full h-screen relative" id='/' >
            

            <img src="/images/Hero.jpg" className="w-full h-full object-cover" alt="" id='Hero-img' />

            <div className="xl:absolute w-full h-full bottom-0 left-0 ">
                <div className="absolute bottom-0  w-full h-full flex flex-col justify-center text-center  xl:p-4 space-y-5 px-3 xl:px-10">
                    <h1 className='text-5xl xl:text-6xl font-bold text-white'>Bright Mehndi Looks <span className=''>Awesome</span></h1>
                    <p className='text-white xl:mx-52'>Mehndi is temporary body art of skin. It is most popular in India, Bangladesh, Sri Lanka, and Pakistani women. Also, Indian women are wearing mehndi in Marriage, Vat Purnima, Diwali, Bhai Dooj, Fastible, and Durga Puja.Also, mehndi comes in many colors such as red, white, and black. Most women are wearing to like red color mehndi. Also, comment to us which color Mehendi is your favorite?.</p>
                    <Link className='Link' to="Card" spy={true} smooth={true} offset={-50} duration={500} >
                        <span className="relative inline-flex items-center cursor-pointer justify-center px-8 py-2  overflow-hidden font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative font-bold">Let's Get Inquiry</span>
                        </span>
                    </Link>
                </div>
            </div>
        </div>


    )
}


export default Hero



