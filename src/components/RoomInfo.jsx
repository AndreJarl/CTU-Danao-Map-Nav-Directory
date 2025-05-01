import React from 'react'


import eeLab from "../api/engineering/img/EELAB03.jpg";
import ceLab1 from "../api/engineering/img/CELAB01.jpg";
import feCR1 from "../api/engineering/img/LCR103.jpg";
import { AiOutlineClose } from "react-icons/ai";
// this is for importing icons
import { FaArrowRightLong } from "react-icons/fa6";

function RoomInfo({ showInfoPanel, setShowInfoPanel, roomInfo,emoji }) {
  return (
<div className={`fixed m-3 lg:right-5 md:right-7 top-5 lg:top-16 border-2 py-2 border-opacity-50 border-gray-400 rounded-2xl overflow-y-auto px-4 h-[500px] lg:h-[75%] 2xl:h-[50%] w-[310px] md:w-[310px] lg:w-[400px] 2xl:w-[27%] bg-white shadow-2xl p-2 transform transition-transform ease-in-out duration-700 z-[1000]  ${showInfoPanel ? 'translate-x-0' : 'translate-x-full'}`}>


                       
     <div className="p-4 pt-3  top-0 absolute right-0 flex justify-between items-center z-50 ">
        
         {/* <button onClick={() => setShowInfoPanel(false)} className="text-white rounded-lg font-normal text-base flex gap-2 items-center bg-red-600 px-3 py-1">Close <FaArrowRightLong/></button> */}
         <button onClick={() => setShowInfoPanel(false)} className="rounded-full bg-red-500 hover:bg-red-700 font-bold text-xl flex gap-2 items-center text-white px-2 py-2"><AiOutlineClose/></button>
     </div>
     <div className="p-4 flex flex-col gap-3 px-5 overflow-y-auto  mt-2 ">
           <h2 className=" text-2xl lg:text-3xl font-semibold text-shadow-lg">{emoji} {roomInfo?.name}</h2>
               <h3 className=" mb-2 font-medium text-gray-700 text-base"> {roomInfo.key}</h3>
             <img className='w-[100%]'  src={roomInfo.image} alt="" srcset="" />
             <i className="text-xs text-red-500 font-normal text-center">image of {roomInfo.key}</i>
             <p className="mb-14">{roomInfo.description}</p>
     </div>
    </div>
  )
}

export default RoomInfo