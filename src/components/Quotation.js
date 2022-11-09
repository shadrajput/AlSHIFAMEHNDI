import React from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import Arabic from './Arabic';
import Bridal from './Bridal';
import Moghlai from './Moghlai';



const Quotation = () => {
    const [reportState, setreportState] = React.useState("Arabic")
    const navigate = useNavigate();

    return (
        <div className="quatation1 w-full h-screen relative" id='/'>
            <div className="xl:absolute w-full h-full top-0 left-0  ">
                <div className=' m-5 flex justify-between items-center ' >
                    <button className=' bg-white rounded-full w-10 h-10 flex  items-center duration-500 hover:shadow-2xl ' onClick={() => navigate(-1)}>
                        <IoIosArrowBack className='text-[#571217] text-2xl fixed ml-2' />
                    </button>
                    {/* <div>
                        <select name="" id="" onChange={(e) => {
                            const selectedReport = e.target.value
                            setreportState(selectedReport)
                        }} >
                            <option value="Select">Select</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Bridal">Bridal</option>
                            <option value="Moghlai">Moghlai</option>
                        </select>
                    </div> */}
                </div>
                {/* {reportState == 'Arabic' ? <Arabic /> : <Bridal />} */}
                <Arabic/>
            </div>
        </div>
    )
}
export default Quotation































