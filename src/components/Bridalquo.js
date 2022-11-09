import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { AiFillCloseCircle } from 'react-icons/ai'
import { NavLink, useNavigate } from "react-router-dom";
import Arabicquo from './Arabicquo';




const Bridalquo = () => {
    const [Quotation, setQuotation] = React.useState("Bridal");
    const navigate = useNavigate();
    return (
        <div className="quatation1 w-full h-screen relative" id='/'>
            <div className="xl:absolute w-full h-full top-0 left-0  ">
                <div className=' m-5 flex justify-between items-center ' >
                    <button className=' bg-white rounded-full w-10 h-10 flex  items-center duration-500 hover:shadow-2xl ' onClick={() => navigate(-1)}>
                        <IoIosArrowBack className='text-[#571217] text-2xl fixed ml-2' />
                    </button>
                    <div className="mehnditypes space-y-3 py-7">
                        <select name="" id="" className='w-full py-2 rounded-full px-3 active:outline-none drop-shadow-xl '
                            onChange={(e) => {
                                const selectedReport = e.target.value
                                setQuotation(selectedReport)
                            }}

                        >
                            <option value="" className=''>Select Mehndi</option>
                            <option value="Arabic" >Arabic Mehndi</option>
                            <option value="Bridal">Bridal Mehndi</option>
                            <option value="Figur">Figur Mehndi</option>
                            <option value="Moghlai">Moghlai Mehndi</option>
                        </select>
                    </div>
                </div>

                {Quotation == "Arabic" ?

                    <div className='absolute top-[20%] grid grid-cols-2 gap-10 mx-32 px-10 py-10 bg-[#571217] rounded-md'>
                        <div className='text-white flex justify-center items-center mx-14 '>
                            <div className=''>
                                <h1 className='text-5xl font-bold pb-5'>Get a Arabic Quotation</h1>
                                <h1 className='text-sm text-[#e9dac7b1] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</h1>
                                <h1 className='pt-10 '>Mehndi is temporary body art of skin. It is most popular in India, Bangladesh, Sri Lanka, and Pakistani women. Also, Indian women are wearing mehndi in Marriage, Vat Purnima, Diwali, Bhai Dooj, Fastible, and Durga Puja.Also, mehndi comes in many colors such as red, white, and black. Most women are wearing to like red color mehndi. Also, comment to us which color Mehendi is your favorite?.</h1>
                                <NavLink to="/Arabicquo/Contact">
                                    <div className='flex justify-start items-center py-5 xl:py-5 ' >
                                        <button className='q-btn sm:px-6 lg:px-8 lg:py-2 xl:py-2 rounded-full border-2 font-semibold border-white text-[#e9dac7] hover:text-[#571217] hover:font-semibold'>
                                            Contact Us
                                        </button>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className=' flex   bg-[#e9dac7] drop-shadow-xl rounded-md py-5 px-10 '>
                            <div className=' w-full'>
                                <h1 className='text-4xl text-[#571217] text-left font-semibold'>
                                    Quotation..
                                </h1>
                                <div className='py-8 mx-10'>

                                </div>

                            </div>
                        </div>
                    </div>

                    :
                    Quotation == "Bridal" ? <Bridalquo />
                        :
                        Quotation == "Figur" ? <Arabicquo />
                            :
                            Quotation == "Moghlai" ? <Bridalquo />
                                :
                                ""

                }





            </div>



        </div>



    )
}

export default Bridalquo 
