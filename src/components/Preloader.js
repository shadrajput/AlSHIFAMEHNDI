import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";





const Preloader = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className=''>
                    <img src='./images/preloader.gif.gif' alt=""  />
                    <h1 className='relative bottom-9 left-[65px] text-[#571712] text-xl font-semibold'>Loading</h1>

                </div>
            </div>
        </>
    )
}





export default Preloader



