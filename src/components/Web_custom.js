import React from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";

const Web_custom = () => {
  return (

    <div className='xl:h-screen landing-page  py-20   '>
    <div className='grid gap-10 lg:mx-32 md:mx-5 sm:mx-20 mx-0  md:gap-0 md:grid-cols-2  xl:grid-cols-2  xl:h-full  items-center'>
     
      <div className="right  md:space-y-3 md:mt-16  p-8 xl:p-0 pt-0 ">
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 '>
          Web Development
        </h1>
        <p className='text-justify sm:text-md  md:text-lg text-gray-800 tracking-wide py-5'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding of what has been said. Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding of what has been said. Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding of what has been said. </p>
        <div>
          <span className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-slate-900 rounded-full cursor-pointer group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Connect With Us </span>
          </span>
        </div>
      </div>
      <div className=" flex justify-center p-5">
        <img
          src="../images/customiz-PhotoRoom.png" alt="" className='' />
      </div>
    </div>



  </div>

  )
}


export default Web_custom