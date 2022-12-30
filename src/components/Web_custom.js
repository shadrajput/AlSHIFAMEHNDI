import React from 'react';
import { TbNotebook } from "react-icons/tb";
import { RiMedalFill } from "react-icons/ri";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";



const Web_custom = () => {
  return (
    <div className="banner w-full h-screen relative" id='/' >


      <img src="/images/5166950.jpg" className="w-full h-full object-cover" alt="" id='Hero-img' />

      <div className="xl:absolute w-full h-full bottom-0  left-0 ">
        <div className='absolute  m-2 xl:m-4 flex justify-between items-center ' >
          <img src="./images/WHITE.PNG" alt="" className='w-[14%]' />
          <div className=' flex justify-end items-center space-x-10'>
            <div className='space-y-1'>
              <AiFillLinkedin className='text-white ml-4 text-3xl' />
              <p className='text-white'>wellbenix</p>
            </div>
            <div className='space-y-1'>
              <AiFillInstagram className='text-white ml-4 text-3xl' />
              <p className='text-white'>wellbenix</p>
            </div>
          </div>
        </div>
        <div className="absolute top-16  flex flex-col justify-start text-center  xl:p-4 space-y-5 px-3 xl:px-10">
          <h1 className='text-5xl xl:text-6xl font-bold text-white'>Professional Web</h1>
          <h1 className='text-5xl xl:text-6xl font-bold text-white'>Development Services</h1>
          <p className='text-white text-lg xl:mx-[350px]'>We are a reliable and affordable digital agency and telent network.We channel creativity
            colors,copy and code to help our clients with better branding. </p>
        </div>
        <div className='grid  grid-cols-4 justify-center items-center  mx-40 pt-[350px] gap-7'>
          <div className='bg-white flex justify-center items-center py-10 rounded-md'>
            <div className='space-y-3'>
              <div className='flex justify-center items-center  rounded-full bg-blue-700 py-7 px-7'>
                <TbNotebook className=' text-white  flex justify-center items-center text-5xl' />
              </div>
              <h1 className='uppercase text-center text-xl font-semibold'>Branding</h1>

            </div>
          </div>
          <div className='bg-white flex justify-center items-center py-10 rounded-md'>
            <div className='space-y-3'>
              <div className='flex justify-center items-center  rounded-full bg-blue-700 py-7 px-7'>
                <RiMedalFill className=' text-white  flex justify-center items-center text-5xl' />
              </div>
              <h1 className='uppercase text-center text-xl font-semibold'>Quality</h1>

            </div>
          </div>
          <div className='bg-white flex justify-center items-center py-10 rounded-md'>
            <div className='space-y-3'>
              <div className='flex justify-center items-center  rounded-full bg-blue-700 py-7 px-7'>
                <BsFillPenFill className=' text-white  flex justify-center items-center text-5xl' />
              </div>
              <h1 className='uppercase text-center text-xl font-semibold'>Design</h1>

            </div>
          </div>
          <div className='bg-white flex justify-center items-center py-10 rounded-md'>
            <div className='space-y-3'>
              <div className='flex justify-center items-center  rounded-full bg-blue-700 py-7 px-7'>
                <FiSend className=' text-white  flex justify-center items-center text-5xl' />
              </div>
              <h1 className='uppercase text-center text-xl font-semibold'>Creativity</h1>

            </div>
          </div>
        </div>
        <div className=' absolute mt-12 space-y-5 ml-[440px]'>
          <div className='flex justify-between items-center space-x-28'>
            <div className='space-y-1'>
              <AiFillPhone className='text-white text-4xl ml-8' />
              <p className='text-white text-xl'>
                9328027580
              </p>
            </div>
            <div className='space-y-1'>
              <CgMail className='text-white text-4xl ml-20' />
              <p className='text-white text-xl'>
                wellbenix@gmail.com
              </p>
            </div>
            <div className='space-y-3'>
              <GoLocation className='text-white text-4xl ml-16' />
              <p className='text-white text-xl'>
                wellbenix.com
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}


export default Web_custom