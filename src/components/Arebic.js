import React, { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosSend } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Arebic = () => {
    const [model, setModel] = React.useState(false);
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const navigate = useNavigate();
    const form = useRef();
    const notify = () => toast("Message Send Success!!");
    const error = () => toast("Some Went Wrong");
    const handleClick = () => {
        setModel(false)
    }

    const Sendmail = (e) => {
        e.preventDefault();
        setIsLoadingOnSubmit(true)
        emailjs.sendForm("service_36awf6s", "template_vbclm9k", form.current, "kNV5GbduK22MAn4rG")
            .then(res => {
                console.log(res, res)
                notify()
                navigate(`/`)
                setIsLoadingOnSubmit(false)
                document.getElementById('Name').value = ' '
                document.getElementById('email').value = ' '
                document.getElementById('message').value = ' '
            }).catch(err => {
                console.log("error", err)
                error()
                setIsLoadingOnSubmit(true)
            })
    }

    return (
        <div className="relative ">
            {model && (
                <div className='flex justify-center shadow-2xl  '>
                    <div className='absolute  mx-0  opacity-100 shadow-2xl rounded top-32 bg-white  z-50'>
                        <div className=''>
                            <div className='flex justify-end '>
                                <button onClick={handleClick} className='absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-[#571217] '>

                                    <AiFillCloseCircle />
                                </button>

                            </div>
                            <div className='py-10'>
                                <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]  '>
                                    Contact Us
                                </h1>
                                <div className='px-20 mt-10'>
                                    <form ref={form} className='w-full space-y-5 xl:space-y-10 ' onSubmit={Sendmail} >
                                        <input type="text" id='Name' name='Name' autoComplete='off' required placeholder='Name' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <input type="email" id='email' name="email" autoComplete='off' required placeholder='Email' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <input type="text" id='message' name='message' autoComplete='off' required placeholder='message' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <div className='flex justify-start items-center '>
                                            <button disabled={isLoadingOnSubmit} className={`con-btn  ${isLoadingOnSubmit ? "opacity-50 w-36" : "opacity-100"} bg-[#e9dac7] text-[#571217] font-semibold rounded-full w-24 h-10 flex justify-center space-x-1 items-center duration-500 hover:shadow-2xl `}>
                                                {isLoadingOnSubmit ? 'Sending...' : 'Send'}
                                                <IoIosSend className='text-[#571217] text-2xl ml-1 ' />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            )}

            <div className={`bg-slate-100 ${model && "opacity-10"}`}>
                <div className="quatation1 w-full h-screen relative" id='/'>
                    <div className="xl:absolute w-full h-full top-0 left-0  ">
                        <div className=' m-5 flex justify-between items-center ' >
                            <button className=' bg-white rounded-full w-10 h-10 flex  items-center duration-500 hover:shadow-2xl ' onClick={() => navigate(-1)}>
                                <IoIosArrowBack className='text-[#571217] text-2xl fixed ml-2' />
                            </button>
                        </div>
                        <div className='absolute top-[5%] grid grid-cols-2 gap-10 mx-32 px-10 py-10  rounded-md'>
                            <div className='text-white flex justify-center items-center mx-5 mt-3 '>
                                <div className=''>
                                    <h1 className='text-5xl font-bold pb-5'>Get a Arebic Mehndi Quotation</h1>
                                    <h1 className='text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</h1>
                                    <h1 className='pt-10 '>Mehndi is temporary body art of skin. It is most popular in India, Bangladesh, Sri Lanka, and Pakistani women. Also, Indian women are wearing mehndi in Marriage, Vat Purnima, Diwali, Bhai Dooj, Fastible, and Durga Puja.Also, mehndi comes in many colors such as red, white, and black. Most women are wearing to like red color mehndi. Also, comment to us which color Mehendi is your favorite?.</h1>
                                    {/* <NavLink to="/Arebic/Contact"> */}
                                    <div className='flex justify-start items-center py-5 xl:py-5 ' onClick={(e) => setModel(true)} >
                                        <button className='q-btn sm:px-6 lg:px-8 lg:py-2 xl:py-2 hover:text-[#571217] rounded-full border-2 font-semibold border-white text-white  hover:font-semibold'>
                                            Contact Us
                                        </button>
                                    </div>
                                    {/* </NavLink> */}
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
                                        <div className='flex justify-between items-center '>
                                            <h1 className='text-xl text-[#571217]'>Palm</h1>
                                            <h1 className='text-xl text-[#571217]'>100/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>Palm Geech</h1>
                                            <h1 className='text-xl text-[#571217]'>150/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>4 Finger</h1>
                                            <h1 className='text-xl text-[#571217]'>250/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>4 Finger Geech</h1>
                                            <h1 className='text-xl text-[#571217]'>300/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>8 Finger</h1>
                                            <h1 className='text-xl text-[#571217]'>350/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>8 Finger Geech</h1>
                                            <h1 className='text-xl text-[#571217]'>400/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>Leg Bunch</h1>
                                            <h1 className='text-xl text-[#571217]'>100/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>Leg ankle</h1>
                                            <h1 className='text-xl text-[#571217]'>250/-</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-xl text-[#571217]'>Leg Ankle Geech</h1>
                                            <h1 className='text-xl text-[#571217]'>100/-</h1>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Arebic