import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Connect = () => {
    return (
        <div className="flex flex-col justify-center bg-[#f4ecdf] items-center px-5 py-5 space-y-3 xl:space-y-5 xl:py-5 md:px-10">
        <h4 className="text-2xl md:text-3xl font-medium  text-center text-[#571217]">Want to drow a mehndi ??</h4>
        <p className="text-center text-[#571217b8] text-base  lg:text-lg xl:text-lg font-normal">Contact on : alshifamehndi123@gmail.com</p>
        <Link className='Link' to="Card" spy={true} smooth={true} offset={-50} duration={500} >
          <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-2 sm:px-8 sm:py-3 overflow-hidden font-mono font-medium tracking-tighter text-[#571217] hover:text-white  bg-[#e9dac7] rounded-full group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Connect With Us</span>
          </span>
        </Link>
      </div>




    )
}





export default Connect