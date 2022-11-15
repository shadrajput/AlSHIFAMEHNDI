import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";





const Preloader = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
            <div className='items-center'>
                <ClipLoader
                    color={"#571217"}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <h1 className='text-center text-[#571715] font-semibold'>
                    Loading...
                </h1>

            </div>
            </div>
        </>
    )
}





export default Preloader



