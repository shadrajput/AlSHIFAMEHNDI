import React from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'







const Hero = () => {
    const images = new Array(
        "/images/cvl.jpg",
        "/images/figur.jpg",
        "/images/bridal.jpg",
    )

    const [slideImg, setslideimg] = React.useState(images)
    
    var len = slideImg.length;
    var i = 0;
    
    const  slider = () =>{
        if(i > len-1){
            i=0
        }
        setslideimg.src = images[i];
        i++;
        setTimeout("slider()" , 3000)
    }

    return (
        <div className="banner w-full h-screen relative" id='/' onLoad={slider()}>
            <img src='./images/Hero.jpg' className={`w-full h-full object-cover ${slideImg} `} alt="" />

            <div className="xl:absolute w-full h-full bottom-0 left-0 ">
                <div className="absolute bottom-5  w-full h-full flex flex-col justify-end text-center  xl:p-4 space-y-5 px-3 xl:px-10">
                    <h1 className='text-5xl xl:text-5xl font-semibold text-white'>Bright Mehndi Looks <span className=''>Awesome</span></h1>
                    <div className='bg-[#0000007a] xl:py-5 xl:mx-60 sm:mx-7 lg:mx-40 rounded-md '>
                        <div className='xl:flex sm:flex justify-center items-center space-x-5 p-3'>
                            <div className='flex space-x-5'>
                                <div className='space-y-1'>
                                    <label htmlFor="" className='text-white font-semibold text-sm'>I'm looking for a</label>
                                    <select name="" id="" className='w-full py-2 rounded-lg active:outline-none hover:outline-none cursor-pointer text-[#571217] px-3 font-semibold text-sm '>
                                        <option value="Bridal">Bridal</option>
                                        <option value="Figur">Figur</option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Moghlai">Moghlai</option>
                                    </select>
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor="" className='text-white font-semibold text-sm'>Options for</label>
                                    <select name="" id="" className='w-full py-2 rounded-lg active:outline-none hover:outline-none  cursor-pointer text-[#571217] px-3 font-semibold text-sm'>
                                        <option value="pam">Pam</option>
                                        <option value="pam-geech">Pam-geech</option>
                                        <option value="2Finger">2 - Finger</option>
                                        <option value="4Finger">4 - Finger</option>
                                        <option value="Full Hand">Full</option>

                                    </select>
                                </div>
                                <div className='space-y-1'>
                                    <label htmlFor="" className='text-white font-semibold text-sm'>Body Pats</label>
                                    <select name="" id="" className='w-full py-2 rounded-lg active:outline-none hover:outline-none  cursor-pointer text-[#571217] px-3 font-semibold text-sm'>
                                        <option value="Hand">Hand</option>
                                        <option value="fronthand">Front-Hand</option>
                                        <option value="backhand">Back-Hand</option>
                                        <option value="finger">Finger</option>
                                        <option value="Leg">Leg</option>
                                        <option value="hand-lang">Hand-Leg</option>

                                    </select>
                                </div>

                            </div>
                            <div className='xl:pl-10'>
                                <Link className='Link' to="Contact" spy={true} smooth={true} offset={-50} duration={500} >
                                    <span className="relative inline-flex items-center cursor-pointer justify-center px-5 py-2 text-sm overflow-hidden font-mono font-medium tracking-tighter hover:text-white text-[#571217] bg-[#fff] rounded-lg mt-6 group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out  bg-[#571217] rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span className="relative font-bold">SUBMIT</span>
                                    </span>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}


export default Hero



