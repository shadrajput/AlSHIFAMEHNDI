import React from 'react';
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";



const Services = () => {
    return (
        <section className=''>
            <div className='lg:mx-32 md:mx-28 sm:mx-20 mx-10 services xl:h-full py-10' id='Services'>


                <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-bold text-[#571217]  pb-10'>
                    Services 
                </h1>
                <div className=' py-0 xl:py-16'>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-10  justify-center  xl:gap-10 '>
                        <div

                            className='bg-white hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg  rounded-lg cursor-pointer  text-center space-y-5 py-3 '>
                            <div className='flex justify-center'>
                                <img src="../images/website-codes.png" alt="" className='md:w-1/6 w-1/4' />
                            </div>
                            <h1 className='text-xl font-bold'>Back-end Development</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 '>
                            <div className='flex justify-center'>
                                <img src="../images/backend.png" alt="" className='md:w-1/6 w-1/4' />
                            </div>
                            <h1 className='text-xl font-bold'>Back-end Development</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 '>
                            <div className='flex justify-center'>
                                <img src="../images/saas.png" alt="" className='md:w-1/6 w-1/4' />
                            </div>
                            <h1 className='text-xl font-bold'>Saas Product</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 '>
                            <div className='flex justify-center'>
                                <img src="../images/interactive.png" alt="" className='md:w-1/6 w-1/4' />
                            </div>
                            <h1 className='text-xl font-bold'>UI/UX</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 '>
                            <div className='flex justify-center'>
                                <img src="../images/graphic-design.png" alt="" className='md:w-1/6 w-1/4' />
                            </div>
                            <h1 className='text-xl font-bold'>Web Desinign</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 '>
                            <div className='flex justify-center'>
                                <img src="../images/shopping.png" alt="" className='md:w-1/6 w-1/4' />
                            </div>
                            <h1 className='text-xl font-bold'>E-commerce</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>

                    </div>
                    <div className=' md:flex md:space-y-0 md:space-x-5 xl:flex justify-center  mt-5 space-y-5 xl:m-0 xl:pt-6 xl:space-x-20 '>


                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 xl:w-1/3  '>
                            <div className='flex justify-center'>
                                <img src="../images/seo.png" alt="" className='md:w-1/6 w-1/3 xl:w-1/5' />
                            </div>
                            <h1 className='text-xl font-bold'>SEO</h1>
                            <p className='text-xs xl:text-base m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                        <div className='bg-white  rounded-lg cursor-pointer hover:origin-bottom hover:-translate-y-5 hover:transition-all hover:duration-700 hover:drop-shadow-lg text-center space-y-5 py-3 xl:w-1/3 '>
                            <div className='flex justify-center p-3 pt-0 pb-0'>
                                <img src="../images/settings.png" alt="" className='md:w-1/6 w-1/3 xl:w-1/5' />
                            </div>
                            <h1 className='text-xl font-bold'>Maintenance</h1>
                            <p className='text-xs xl:text-base  m-5 text-gray-700'>Paraphrase is also a communication tool that serves, among other things, to confirm the level of understanding.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}










export default Services