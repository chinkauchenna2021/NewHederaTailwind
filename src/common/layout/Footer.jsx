/* eslint-disable no-unused-vars */
import React from 'react';
import { FaHome, FaChartArea, FaChartLine } from "react-icons/fa";
import { MdFlashOn } from "react-icons/md";
import { GlobalStyling } from '../globalStyles/Global';
import { useNavigate } from 'react-router-dom';
import Activities from '../pages/Activities';
// 

function Footer() {
    const navigate = useNavigate();
  return (
      <div className='w-full h-fit backdrop-blur-2xl py-3 bg-white/70 flex justify-center items-center rounded-xl absolute bottom-0 right-1'>
          <GlobalStyling />
          <div className='h-full w-full text-md font-base tracking-wide text-slate-700 flex flex-row justify-evenly items-center space-x-7'>
              <div onClick={()=>navigate('/')} className="flex flex-col justify-center items-center cursor-pointer space-y-2 ">
                 <div className='w-fit h-fit'><FaHome size={18} color="#000000" /></div>
               <div className='w-fit h-fit text-md font-semibold tracking-wide'>Home</div>
              </div>   
              <div className="flex flex-col justify-center items-center cursor-pointer space-y-2 text-gray-300">
                 <div className='w-fit h-fit'><FaChartArea size={18} className='text-gray-300'/></div>
               <div className='w-fit h-fit text-md font-semibold tracking-wide'>Governance</div>
              </div> 
           <div className="flex flex-col justify-center items-center cursor-pointer space-y-2 text-gray-300">
                 <div className='w-fit h-fit'><FaChartLine size={18} className='text-gray-300' /></div>
               <div className='w-fit h-fit text-md font-semibold tracking-wide'>Stake</div>
              </div> 
        <div  onClick={()=>navigate('/activities')} className="flex flex-col justify-center items-center cursor-pointer space-y-2 text-gray-300">
                 <div className='w-fit h-fit'><MdFlashOn size={18} className='text-gray-300' /></div>
               <div className='w-fit h-fit text-md font-semibold tracking-wide'>Activity</div>
              </div> 
          </div>
    </div>
  )
}

export default Footer