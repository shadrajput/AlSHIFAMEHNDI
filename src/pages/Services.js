import React from 'react';
import { NavLink } from 'react-router-dom';




const Services = () => {
  return (
    <>
      <section className='bg-red-500' id='Services'>
        <div className='lg:mx-14 xl:mx-20 md:mx-20 sm:mx-0 mx-10  services xl:h-full py-5 xl:py-5 ' >
          <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]  '>
            Services
          </h1>
          <div className='flex-wrap  md:justify-between md:space-y-0 md:space-x-0 md:gap-14 gap-5 sm:space-x-0 sm:space-y-0 flex justify-center xl:justify-between items-center py-10 space-y-5  lg:space-y-0 lg:space-x-0 xl:space-y-0 '>
            <NavLink to="/Arebic">
              <div className="card hover:-translate-y-5 duration-500 relative  xl:w-64 lg:w-64  md:w-64 sm:w-44 rounded-lg  hover:cursor-pointer space-y-4 " >
                <div className='xl:h-full xl:w-full flex justify-center'>
                  <img src="/images/cvl.jpg" alt="" className='xl:h-full rounded-lg xl:w-full w-2/3 md:w-2/3 lg:w-4/5 '
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}
                  />

                </div>
                <div className='pt-5'>
                  <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-xl py-3 text-center uppercase font-semibold text-black'>Bridal Mehndi</h1>
                  <p className='text-center text-xs md:text-sm lg:text-sm xl:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ab numquam nemo inventore exercitationem reprehenderit odio illo laudantium iusto a consectetur facere vitae totam pariatur, nostrum, sunt explicabo eligendi quaerat!</p>
                  <div className='flex justify-center items-center py-5'>
                    <span className="relative inline-flex items-center justify-center px-6 py-2 md:px-8  lg:px-10  lg:text-base md:text-base xl:text-base xl:px-8  overflow-hidden font-mono font-medium tracking-tighter hover:text-[#571217] text-white bg-[#571217]  rounded-full group">
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#e9dac7] rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="relative">Get a Quotation</span>
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Bridal">
              <div className="card relative hover:-translate-y-5 duration-500 xl:w-64 lg:w-64  md:w-64 sm:w-44 rounded-lg  hover:cursor-pointer space-y-4 " >
                <div className='xl:h-full xl:w-full flex justify-center'>
                  <img src="/images/bridal.jpg" alt="" className='xl:h-full rounded-lg xl:w-full w-2/3 md:w-2/3 lg:w-4/5 '
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}
                  />

                </div>
                <div className='pt-5'>
                  <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-xl py-3 text-center uppercase font-semibold text-black'>Arabic Mehndi</h1>
                  <p className='text-center text-xs md:text-sm lg:text-sm xl:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ab numquam nemo inventore exercitationem reprehenderit odio illo laudantium iusto a consectetur facere vitae totam pariatur, nostrum, sunt explicabo eligendi quaerat!</p>
                  <div className='flex justify-center items-center py-5'>
                    <span className="relative inline-flex items-center justify-center px-6 py-2 md:px-8 lg:px-10 lg:text-base md:text-base xl:text-base xl:px-8 overflow-hidden font-mono font-medium tracking-tighter hover:text-[#571217] text-white bg-[#571217]  rounded-full group">
                      <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#e9dac7] rounded-full group-hover:w-56 group-hover:h-56"></span>
                      <span className="relative">Get a Quotation</span>
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/Bridal">
            <div className="card relative hover:-translate-y-5 duration-500 xl:w-64 lg:w-64  md:w-64 sm:w-44 rounded-lg  hover:cursor-pointer space-y-4 " >
              <div className='xl:h-full xl:w-full flex justify-center'>
                <img src="/images/bridal.jpg" alt="" className='xl:h-full rounded-lg xl:w-full w-2/3 md:w-2/3 lg:w-4/5 '
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}
                />

              </div>
              <div className='pt-5'>
                <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-xl py-3 text-center uppercase font-semibold text-black'>Arabic Mehndi</h1>
                <p className='text-center text-xs md:text-sm lg:text-sm xl:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ab numquam nemo inventore exercitationem reprehenderit odio illo laudantium iusto a consectetur facere vitae totam pariatur, nostrum, sunt explicabo eligendi quaerat!</p>
                <div className='flex justify-center items-center py-5'>
                  <span className="relative inline-flex items-center justify-center px-6 py-2 md:px-8  lg:px-10  lg:text-base md:text-base xl:text-base xl:px-8  overflow-hidden font-mono font-medium tracking-tighter hover:text-[#571217] text-white bg-[#571217]  rounded-full group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#e9dac7] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative">Get a Quotation</span>
                  </span>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/Bridal">
            <div className="card relative hover:-translate-y-5 duration-500 xl:w-64 lg:w-64  md:w-64 sm:w-44 rounded-lg  hover:cursor-pointer space-y-4 " >
              <div className='xl:h-full xl:w-full flex justify-center'>
                <img src="/images/bridal.jpg" alt="" className='xl:h-full rounded-lg xl:w-full w-2/3 md:w-2/3 lg:w-4/5 '
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.5) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}
                />

              </div>
              <div className='pt-5'>
                <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-xl py-3 text-center uppercase font-semibold text-black'>Arabic Mehndi</h1>
                <p className='text-center text-xs md:text-sm lg:text-sm xl:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ab numquam nemo inventore exercitationem reprehenderit odio illo laudantium iusto a consectetur facere vitae totam pariatur, nostrum, sunt explicabo eligendi quaerat!</p>
                <div className='flex justify-center items-center py-5'>
                  <span className="relative inline-flex items-center justify-center px-6 py-2 md:px-8  lg:px-10  lg:text-base md:text-base xl:text-base xl:px-8  overflow-hidden font-mono font-medium tracking-tighter hover:text-[#571217] text-white bg-[#571217]  rounded-full group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#e9dac7] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="relative">Get a Quotation</span>
                  </span>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </section>






    </>




  )
}














export default Services