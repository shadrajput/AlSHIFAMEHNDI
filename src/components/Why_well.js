import React from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";

const Why_well = () => {
  return (
    <section className=''>
      <div className='xl:h-screen landing-page  lg:mx-32 md:mx-28 sm:mx-20 mx-10  py-5 xl:py-10   '>
        <div className='grid gap-10  md:gap-5 md:grid-cols-2 xl:gap-10 xl:grid-cols-2  xl:h-full  items-center'>
          <div className="left ">
            <img
              src="../images/why.jpg" alt="" className='' />
          </div>
          <div className="right  md:space-y-3 md:mt-16  ">
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 '>
              Why Wellbenix
            </h1>
            <p className='text-justify sm:text-md  md:text-lg  text-gray-800 tracking-wide py-5'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding of what has been said. Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding of what has been said. Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding of what has been said. </p>
            <div>
              <span className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-slate-900 rounded-full cursor-pointer group">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative">Connect With Us </span>
              </span>
            </div>
          </div>
        </div>



      </div>
    </section>


  )
}


export default Why_well