import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";





const Preloader = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className=''>
                    <img src='./images/preloader.gif' alt=""  />
                    <h1 className='relative bottom-20 left-[100px] font-semibold text-gray-600'>Loading</h1>

                </div>
            </div>
        </>
    )
}





export default Preloader



