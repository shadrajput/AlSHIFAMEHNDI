import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'






const Hero = () => {
    return (
        <div className="banner w-full h-screen" id='/'>
            <div className="xl:absolute w-full h-full top-0 left-0 ">
                <div className="absolute  w-full h-full flex flex-col justify-center text-center  xl:p-4 space-y-5 px-3 xl:px-10">
                    <h1 className='text-5xl xl:text-6xl font-bold text-white'>Bright Mehndi Looks <span className=''>Awesome</span></h1>
                    <h2 className="py-3 px-3 xl:px-44 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod ipsum commodi placeat mollitia eius, obcaecati earum quo magnam voluptatum, beatae eveniet, sunt ab libero sit impedit ullam ipsam magni?</h2>

                    <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                        <span className="relative inline-flex items-center cursor-pointer justify-center px-8 py-2 overflow-hidden font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff]  rounded-full group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative font-bold">Contact With Us</span>
                        </span>
                    </Link>
                </div>

              

            </div>
        </div>
    )
}


export default Hero



