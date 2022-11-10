import React from 'react';
import './Card.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




const Card = () => {
  return (
    <>
      <section className=' ' id='Services'>
        <div className='lg:mx-10 xl:mx-0 md:mx-10 sm:mx-0 mx-0 px-5 services xl:h-full py-5 xl:py-5 ' >
          <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]  '>
            Services
          </h1>
          <div className='flex-wrap  xl:mt-20 md:justify-center lg:justify-center md:space-y-0 md:space-x-0 gap-10 sm:space-x-0 sm:space-y-0 flex justify-center xl:justify-center items-center py-10 space-y-5  lg:space-y-0 lg:space-x-0 xl:space-y-0 '>
            <div className="card1  w-3/4 sm:w-2/5 md:w-2/5 lg:w-[30%] xl:w-1/5 pt-10">
              <div className="card-content space-y-3 ">
                <h2 className="card-title text-white font-bold text-2xl pb-1">
                  Arabic Mehndi
                </h2>

                <p className="card-body text-white text-sm ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet assumenda expedita beatae tempore, nobis quae et quasi unde minima fugiat repudiandae rem perspiciatis ipsum vel aspernatur! Quia tenetur vero iusto.
                </p>
                <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                  <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-1 overflow-hidden  font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg group my-3">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative font-bold">Take a Quota</span>
                  </span>
                </Link>
              </div>

            </div>
            <div className="card2 w-3/4 sm:w-2/5 md:w-2/5 lg:w-[30%] xl:w-1/5 pt-10">
              <div className="card-content space-y-3 ">
                <h2 className="card-title text-white font-bold text-2xl pb-1">
                  Bridal Mehndi
                </h2>

                <p className="card-body text-white text-sm ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet assumenda expedita beatae tempore, nobis quae et quasi unde minima fugiat repudiandae rem perspiciatis ipsum vel aspernatur! Quia tenetur vero iusto.
                </p>
                <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                  <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-1 overflow-hidden  font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg group my-3">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative font-bold">Take a Quota</span>
                  </span>
                </Link>
              </div>

            </div>
            <div className="card3 w-3/4 sm:w-2/5 md:w-2/5 lg:w-[30%] xl:w-1/5 pt-10">
              <div className="card-content space-y-3 ">
                <h2 className="card-title text-white font-bold text-2xl pb-1">
                  Figur Mehndi
                </h2>

                <p className="card-body text-white text-sm ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet assumenda expedita beatae tempore, nobis quae et quasi unde minima fugiat repudiandae rem perspiciatis ipsum vel aspernatur! Quia tenetur vero iusto.
                </p>
                <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                  <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-1 overflow-hidden  font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg group my-3">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative font-bold">Take a Quota</span>
                  </span>
                </Link>
              </div>

            </div>
            <div className="card4 w-3/4 sm:w-2/5 md:w-2/5 lg:w-[30%] xl:w-1/5 pt-10">
              <div className="card-content space-y-3 ">
                <h2 className="card-title text-white font-bold text-2xl pb-1">
                  Moghlai Mehndi
                </h2>

                <p className="card-body text-white text-sm ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet assumenda expedita beatae tempore, nobis quae et quasi unde minima fugiat repudiandae rem perspiciatis ipsum vel aspernatur! Quia tenetur vero iusto.
                </p>
                <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                  <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-1 overflow-hidden  font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg group my-3">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative font-bold">Take a Quota</span>
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>




    </>




  )
}














export default Card