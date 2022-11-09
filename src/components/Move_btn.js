import React from 'react';
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";




const Move_btn = () => {

    const [slideIndex , setslideIndex] = React.useState(1)
    
    const nextSlide = () => {
    
    }
    
    const PrevSlide = () => {
        
    }

    return (

        <div>
            <AiFillCaretLeft className='text-5xl hover:cursor-pointer text-gray-600' moveSlide={PrevSlide} direction={"Prev"} />
            <AiFillCaretRight className='text-5xl hover:cursor-pointer text-gray-600' moveSlide={nextSlide} direction={"next"} />
        </div>

    )
}


export default Move_btn






