import React, { useState } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import '../index.scss';


const Aboutus = () => {
  return (
    <section className="main-section xl:h-screen h-full  flex justify-center px-9 sm:px-10 md:px-12 xl:px-20 " id='Aboutus'>
      <div className="  sm:flex md:flex lg:flex xl:flex justify-center items-center ">
        <div className='xl:w-2/3 lg:w-[110%] ml-0 sm:ml-0 md:ml-0 xl:ml-0 lg:ml-10'>
          <h3 className="text-3xl sm:text-3xl  md:text-4xl lg:text-5xl font-semibold text-[#571217] text-center xl:text-left lg:text-left">About Us</h3>
          <p className="text-base  lg:text-lg xl:text-lg font-medium text-gray-700 text-justify mt-5">
            We are provided mostly 4 category in mehndi and our all category we provide regnable price and Mehendi will be applied at our place as per your choice and you will start to feel more beautiful with the mehndi applied on your hands.and you want to know more about my category so please click on know more button
          </p>
          <Link className='Link' to="Card" spy={true} smooth={true} offset={-50} duration={500} >

            <div className='mt-5 flex justify-center xl:justify-start lg:justify-start '>
              <div>
                <span className="relative inline-flex items-center justify-center px-6 py-2 md:py-2  md:px-10 md:text-base text-sm   xl:px-10 xl:py-3 xl:text-base mx overflow-hidden font-semibold tracking-tighter hover:text-[#571217] hover:shadow-xl  bg-[#571217] text-white rounded-full cursor-pointer group">
                  <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-[#e9dac7] rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="relative">Know More</span>
                </span>
              </div>
            </div>
          </Link>

        </div>
        <div className="xl:flex xl:justify-center items-center  xl:space-x-28 space-y-10   py-10 ">
          <div className="xl:w-fit flex justify-center  xl:h-fit xl:mt-32" >
            <img src='./images/figur.jpg' className="group w-2/4 sm:w-1/2 lg:w-1/3  xl:w-[80%]  xl:ml-52 xl:mt-[-50px] hover:scale-110 hover:z-30 rounded-lg" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} id="main-img" alt="" />
          </div>
          <div className=' flex justify-center items-center space-x-5 sm:space-x-7 px-14 md:px-20 lg:px-0 lg:space-x-6 lg:space-y-0  lg:mx-0 xl:block xl:space-x-0 xl:space-y-6 '>
            <img src='./images/bridal.jpg' className="rounded-lg  w-1/3 lg:w-1/5 xl:w-[50%]  cursor-pointer hover:scale-110 hover:z-30 " alt="" style={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px 10px 15px", transition: "all ease-in-out .3s" }} id="image-1" />

            <img src='./images/cvl.jpg' sr className="rounded-lg w-1/3 lg:w-1/5 xl:w-[50%]  cursor-pointer hover:scale-110 hover:z-30" id="image-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px', transition: "all ease-in-out .3s" }} alt="" />

            <img src='./images/Arebic.jpg' sr className=" w-1/3 lg:w-1/5 xl:w-[50%]  cursor-pointer rounded-lg  hover:scale-110  hover:z-50 " id="image-3" style={{ transition: "all ease-in-out .3s", boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus