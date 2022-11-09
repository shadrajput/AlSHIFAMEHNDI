import React from 'react';
import { NavLink } from 'react-router-dom';


const Proposel = () => {
    return (


        <div className="flex flex-col justify-center items-center px-5 py-10 md:px-10  bg-[#F4F8FE]  ">
        <h4 className="text-2xl md:text-3xl font-medium mb-2 text-center text-slate-800">Want to build a custom website?</h4>
        <p className="text-center">Send us your requirements on info@wellbenix.com</p>
        <NavLink to="/contactus" className="rounded-md mt-8 focus:ring-1 focus:outline-none">
          <span className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-slate-900 rounded-full group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="relative">Get A Quote</span>
          </span>
        </NavLink>
      </div>




    )
}





export default Proposel