import React from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Slider from './Slider';


const Project = ({ slides }) => {


    const [current, setcurrent] = React.useState(0)
    const length = slides.length

    const nextSlide = () => {
        setcurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setcurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider ' id='Project'>
            <img className="w-full h-full object-cover " src="/images/testimonials.jpg" />
            <h1 className='absolute top-10 xl:py-10  text-3xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold  xl:text-[#571217] '>Testimonials</h1>
            <div className='absolute xl:space-y-5'>
                {Slider.map((slide, index) => {
                    return (
                        <div className={index === current ? "slide active opacity-100 duration-700 scale-90  " : "slide opacity-0 duration-500"} key={index}>
                            {index === current && (
                                <div className='bg-[#571217] px-0 sm:px-10 md:px-10 lg:px-10 xl:px-10  space-x-5 my-10 py-10 drop-shadow-lg h-[520px] sm:h-[230px] md:h-[280px] lg:h-[250px] sm:space-y-0 xl:space-y-0 xl:mx-24 xl:h-[280px] sm:flex md:flex lg:flex xl:flex justify-between  items-center xl:space-x-24 rounded-2xl  '>
                                    <div className='flex justify-center items-center  xl:justify-start xl:ml-20  '>
                                        <img src={slide.img} alt="" srcset="" className='image w-1/2 sm:w-full md:w-full lg:w-full xl:w-full   rounded-lg' />
                                    </div>
                                    <div className='mx-0 py-3  space-y-2 xl:space-y-4'>
                                        <h1 className='text-white font-bold uppercase text-3xl  sm:text-2xl xl:text-4xl text-center py-2 md:text-left  xl:text-start'>{slide.name}</h1>
                                        <p className='text-gray-300 text-center sm:text-start md:text-start lg:text-start sm:text-base xl:text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, porro officiis corrupti aut quia est laboriosam consequatur quo hic suscipit magnam illum quisquam voluptatum nam! Cum illum corporis modi quod!</p>
                                        <div className='flex items-center space-x-2 sm:justify-start md:justify-start lg:justify-start xl:justify-start justify-center'>
                                            <AiFillStar className='text-2xl text-[#ffd700]' />
                                            <AiFillStar className='text-2xl text-[#ffd700]' />
                                            <AiFillStar className='text-2xl text-[#ffd700]' />
                                            <AiFillStar className='text-2xl text-[#ffd700]' />
                                            <AiFillStar className='text-2xl text-[#ffd700]' />
                                        </div>
                                    </div>
                                </div>

                            )}

                        </div>
                    )
                })}
                <div className='flex justify-center items-center xl:space-x-20 relative top-0 '>
                    <AiFillCaretLeft className='prevSlide text-5xl hover:cursor-pointer  hover:scale-125 duration-500 text-[#571217] xl:absolute' onClick={prevSlide} />
                    <AiFillCaretRight className='nextSlide text-5xl xl:absolute hover:cursor-pointer  hover:scale-125 duration-500 text-[#571217]' onClick={nextSlide} />
                </div>
            </div>
        </section>
    )
}

export default Project











