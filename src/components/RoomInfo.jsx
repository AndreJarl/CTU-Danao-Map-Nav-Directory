import React from 'react'


import eeLab from "../api/engineering/img/EELAB03.jpg";
import ceLab1 from "../api/engineering/img/CELAB01.jpg";
import feCR1 from "../api/engineering/img/LCR103.jpg";

// this is for importing icons
import { FaArrowRightLong } from "react-icons/fa6";

function RoomInfo({ showInfoPanel, setShowInfoPanel, roomInfo }) {
  return (
     <div className={`fixed right-0 top-0 px-5 h-screen w-[500px] bg-white shadow-2xl transition-transform duration-700 z-[1000] ${showInfoPanel ? 'translate-x-0' : 'translate-x-full'}`}>
                       
     <div className="p-4 pt-5 px-10 top-0 absolute right-0 flex justify-between items-center z-50 ">
        
         <button onClick={() => setShowInfoPanel(false)} className="text-white rounded-lg font-normal text-base flex gap-2 items-center bg-red-600 px-3 py-1">Close <FaArrowRightLong/></button>
     </div>
     <div className="p-4 flex flex-col gap-3 px-5 overflow-y-auto  mt-12 h-screen">
           <h2 className="text-4xl font-semibold">{roomInfo?.name}</h2>
               <h3 className=" mb-2 font-medium text-gray-700 text-lg"> {roomInfo.key}</h3>
             <img  src={roomInfo.image} alt="" srcset="" />
             <i className="text-xs text-gray-500 font-extralight text-center">image of {roomInfo.key}</i>
             <p className="mb-20">{roomInfo.description}</p>
     </div>
    </div>
  )
}

export default RoomInfo