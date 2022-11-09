import React, { useRef } from 'react';
import { IoIosSend } from 'react-icons/io'
import '../index.scss';
import emailjs from "emailjs-com"
const Contact = () => {
    // const form = useRef()
    // const Sendmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm("service_36awf6s" , "template_5yjqc8i" ,form.current,"kNV5GbduK22MAn4rG").then(res =>{
    //         console.log(res, res)
    //     }).catch(err => {
    //         console.log("error" , err)
    //     })
    // }
    return (
        <section className="py-10" id='Contact'>
            <h1 className='text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold text-[#571217]  '>
                Get In Touch
            </h1>
            <div className='flex justify-center py-10'>
            <div className='bg-[#571217] w-full h-full sm:flex md:flex lg:flex xl:flex justify-center mx-10 sm:mx-5 md:mx-14 lg:mx-14 xl:mx-20 drop-shadow-2xl rounded-xl  '>
                <div className='sm:w-[50%] xl:w-[60%]  xl:justify-end flex  relative'>
                    <img src="/images/contact.jpg" alt="" className='xl:rounded-l-lg rounded-t-xl  w-full' />

                </div>
                <div className='sm:w-[50%] xl:w-[50%] h-full  flex justify-center py-5 xl:py-14 px-5'>
                    <div className='left w-full xl:mx-20 '>
                        <div className='space-y-5 xl:space-y-10'>
                            <div className='space-y-3 xl:space-y-7'>

                                <h1 className='text-3xl font-bold text-[#e9dac7] '>Let's get in touch </h1>
                                <p className=' text-white text-xs xl:text-base'>Feel free to contact us any time.We will get back to you as soon as we can!</p>
                            </div>
                            <div>
                                <form action="https://formspree.io/f/xqkjgdaa" method='POST' className='w-full space-y-5 xl:space-y-10 ' >
                                    <input type="text" name='Name' autoComplete='off' required placeholder='Name' className='w-full outline-none border-b-2 border-b-[#e9dac7] text-[#e9dac7] bg-[#571217] py-1' />
                                    <input type="text" name='user_email' autoComplete='off' required placeholder='Email' className='w-full outline-none border-b-2 border-b-[#e9dac7] text-[#e9dac7] bg-[#571217] py-1' />
                                    <input type="text" name='message' autoComplete='off' required placeholder='Message' className='w-full outline-none border-b-2 border-b-[#e9dac7] text-[#e9dac7] bg-[#571217] py-1' />
                                    <div className='flex justify-start items-center '>
                                        <button className='btn bg-[#e9dac7] rounded-full w-10 h-10 flex  items-center duration-500 hover:shadow-2xl '>
                                            <IoIosSend className='text-[#571217] text-2xl fixed ml-2' />
                                            <h1 className='send text-[#571217] hidden ml-10 font-semibold'>Send</h1>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            </div>
        </section>
    )
}

export default Contact