import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";




const Moghlai = () => {
    const [reportState, setreportState] = React.useState("Arabic")
    const navigate = useNavigate();

    return (
        <div className="quatation1 w-full h-screen relative" id='/'>
            <div className="xl:absolute w-full h-full top-0 left-0  ">
                <div className=' m-5 flex justify-between items-center ' >
                    <button className=' bg-white rounded-full w-10 h-10 flex  items-center duration-500 hover:shadow-2xl ' onClick={() => navigate(-1)}>
                        <IoIosArrowBack className='text-[#571217] text-2xl fixed ml-2' />
                    </button>
                </div>
                <div className='items-center justify-center absolute top-[20%] grid grid-cols-2 gap-10 mx-32 px-10 py-10  rounded-md'>
                    <div className='text-white flex justify-center items-center mx-5 mt-3 '>
                        <div className=''>
                            <h1 className='text-5xl font-bold pb-5'>Get a Moghlai Mehndi Quotation</h1>
                            <h1 className='text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</h1>
                            <h1 className='pt-10 '>Mehndi is temporary body art of skin. It is most popular in India, Bangladesh, Sri Lanka, and Pakistani women. Also, Indian women are wearing mehndi in Marriage, Vat Purnima, Diwali, Bhai Dooj, Fastible, and Durga Puja.Also, mehndi comes in many colors such as red, white, and black. Most women are wearing to like red color mehndi. Also, comment to us which color Mehendi is your favorite?.</h1>
                            <NavLink to="/Arabicquo/Contact">
                                <div className='flex justify-start items-center py-5 xl:py-5 ' >
                                    <button className='q-btn sm:px-6 lg:px-8 lg:py-2 xl:py-2 hover:text-[#571217] rounded-full border-2 font-semibold border-white text-white  hover:font-semibold'>
                                        Contact Us
                                    </button>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className=' flex  bg-white drop-shadow-xl rounded-md py-5  px-10 '>
                        <div className=' w-full'>
                            <div className='space-y-4'>
                                <h1 className='text-3xl text-[#571217] text-center uppercase font-semibold'>
                                    Quotation..
                                </h1>
                                <div className='h-[2px] bg-[#571217]'>

                                </div>
                            </div>
                            <div className='py-8  space-y-5'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl text-[#571217]'>Palm</h1>
                                    <h1 className='text-xl text-[#571217]'>100/-</h1>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl text-[#571217]'>4 Finger</h1>
                                    <h1 className='text-xl text-[#571217]'>200/-</h1>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Moghlai































