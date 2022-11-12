import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";





const Preloader = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
                <ClipLoader
                    color={"#571217"}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </>
    )
}





export default Preloader



