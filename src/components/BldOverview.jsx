import coefront from "../assets/COEFront1.jpg";
import ceasfront from "../assets/CEASFront.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import cardData from "./CardData";
import { useState } from "react";

function BldOverview({query, setRoomClicked, closeSideBar}) {

    const buildingData = cardData[query];
    const [closeCard, setCloseCard] = useState(false)

  return (
<div className={`fixed z-40  flex flex-col rounded-2xl  shadow-2xl border border-gray-400 border-opacity-50 bg-slate-100  right-[2%]  w-[300px] lg:w-[450px] ${closeCard ? 'hidden' : 'flex'}`}>
  
     <img className='rounded-t-xl '  src={buildingData.img} alt="" srcset="" />
 <button onClick={()=>setCloseCard(!closeCard)} className="flex gap-2 items-center absolute right-5 top-3 bg-red-600 hover:bg-red-800 text-white text-3xl px-2 py-2 rounded-full"><AiOutlineClose/></button>
     <div className='flex flex-col gap-4 pb-5 pt-5' >
            <p className='text-5xl uppercase pl-9 font-semibold'>{query}</p>
            <p className='font-medium text-2xl pl-12 text-red-500'>Floors: {buildingData?.totalFloors || "No Data Available."}</p>
     </div>
                     
   
      </div>
  )
}

export default BldOverview