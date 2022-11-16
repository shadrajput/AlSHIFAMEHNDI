import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";





const Preloader = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className='items-center'>
                    <img src='./images/preloader.gif' alt=""  />
                   

                </div>
            </div>
        </>
    )
}





export default Preloader



