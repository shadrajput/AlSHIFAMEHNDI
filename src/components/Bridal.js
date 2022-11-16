import React, { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"
import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosSend } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Bridal = () => {
    const [model, setModel] = React.useState(false);
    const form = useRef();
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const navigate = useNavigate();
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
                    <div className='absolute mx-10 sm:mx-14 opacity-100 shadow-2xl rounded top-16 xl:top-32 bg-white  z-50'>
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
                                <div className='xl:px-20 mt-10'>
                                    <form ref={form} className='xl:w-full mx-5 space-y-5 xl:space-y-10 ' onSubmit={Sendmail} >
                                        <input type="text" id='Name' name='Name' autoComplete='off' required placeholder='Name' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <input type="email" id='email' name="email" autoComplete='off' required placeholder='Email' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <input type="text" id='message' name='message' autoComplete='off' required placeholder='message' className='w-full outline-none border-b-2 border-b-[#e9dac7]  py-1' />
                                        <div className='flex justify-start items-center '>
                                            <button disabled={isLoadingOnSubmit} className={`con-btn  ${isLoadingOnSubmit ? "opacity-50 w-[140px]" : "opacity-100"} bg-[#e9dac7] text-[#571217] font-semibold rounded-full w-24 h-10 flex justify-center space-x-1 items-center duration-500 hover:shadow-2xl `}>
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
                        <div className='absolute  m-2 xl:m-5 flex justify-between items-center ' >
                            <button className=' bg-white rounded-full w-8 h-8 xl:w-10 xl:h-10 flex  items-center duration-500 hover:shadow-2xl ' onClick={() => navigate(-1)}>
                                <IoIosArrowBack className='text-[#571217] text-2xl xl:fixed ml-1 xl:ml-2' />
                            </button>
                        </div>
                        <div className='items-center justify-center absolute top-[10%] sm:top-[20%] md:top-[22%] lg:top-[25%] xl:top-[20%] mx-5 sm:mx-10 grid xl:grid-cols-2 sm:grid-cols-2 gap-10 xl:mx-32 xl:px-10 xl:py-10  rounded-md'>
                            <div className='text-white flex justify-center items-center xl:mx-5 mt-3 '>
                                <div className=''>
                                    <h1 className='text-3xl sm:text-2xl md:text-3xl text-center lg:text-left xl:text-5xl font-bold pb-5'>Bridalz Mehndi Quotation</h1>
                                    <h1 className=' text-center lg:text-left text-sm sm:text-xs xl:text-sm text-gray-300'>Mehndi is temporary body art of skin. It is most popular in This bridal mehndi design takes symmetry to the next level. A paisley design has been drawn in circular shape which is then surrounded by leaves and petals. And when both the hands are bought together the two halves become one complete motif. This is elaborate art of the next level.</h1>
                                    <div className='flex justify-center lg:justify-start xl:justify-start items-center py-5 xl:py-5 ' onClick={(e) => setModel(true)} >
                                        <button className='q-btn px-6 py-1 sm:px-6 lg:px-8 lg:py-2 xl:py-2 hover:text-[#571217] rounded-full border-2 font-semibold border-white text-white  hover:font-semibold'>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex  bg-white drop-shadow-xl rounded-md py-5  px-10 '>
                                <div className=' w-full'>
                                    <div className='space-y-4 xl:space-y-4'>
                                        <h1 className='text-2xl xl:text-3xl text-[#571217] text-center uppercase font-semibold'>
                                           get Quotation..
                                        </h1>
                                        <div className='h-[2px] bg-[#571217]'>

                                        </div>
                                    </div>
                                    <div className='py-3 xl:py-8 space-y-5 sm:space-y-2 xl:space-y-5'>
                                        <div className='flex justify-between items-center '>
                                            <h1 className='text-lg xl:text-xl text-[#571217]'>Bridal Mehndi Started at 2000/-</h1>
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
export default Bridal