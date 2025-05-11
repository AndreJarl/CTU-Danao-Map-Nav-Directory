import React from 'react'
import { useState } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { LiaEye } from "react-icons/lia";
function Card({cardPosition, cardData,setShowPopup,closeCard, showPopup }) {
 
    
  return (
    <>
    {/* pc */}
    <div className="absolute hidden md:hidden lg:flex lg:flex-col bg-white border  rounded-xl shadow-2xl border-b-4 border-gray-600  z-50"
    style={{
        left: cardPosition.x + 20,   // position to the right of cursor
        top: cardPosition.y - 120     // vertically centered to cursor

    }}
              >
                <img className='rounded-t-xl w-[310px] lg:h-[220px] 2xl:w-[450px] 2xl:h-[290px]' src={cardData.img} alt={cardData.title} style={{  marginBottom: '3px' }} />
                <h4 className=' pl-4 text-xl font-medium'>📌{cardData.title}</h4>
                <p className='text-sm font-normal text-gray-500 pl-6 pb-2 w-[290px]'>Floors: {cardData.floors}</p>
                <div className='flex items-center flex-row gap-2'>
                <button className='text-sm  flex gap-1 items-center bg-red-600 text-white px-2 py-1 rounded-lg ml-4 mb-2' onClick={()=>setShowPopup(!showPopup)}><LiaEye/>View</button>
                <button className='text-sm  flex items-center bg-red-700 text-white px-2 py-1 rounded-lg  mb-2' onClick={closeCard}><MdOutlineClose/>Close </button>
                </div>
               
              </div>
{/* mobile */}
              <div className="absolute lg:hidden md:hidden flex flex-col bg-white border  rounded-xl shadow-2xl border-b-4 border-gray-600  z-50"
              >
                <img className='rounded-t-xl' src={cardData.img} alt={cardData.title} style={{ width: '290px', height: '200px', marginBottom: '3px' }} />
                <h4 className=' pl-4 text-xl font-medium'>📌{cardData.title}</h4>
                <p className='text-sm font-normal text-gray-500 pl-6 pb-2 w-[290px]'>Floors: {cardData.floors}</p>
                <div className='flex items-center flex-row gap-2'>
                <button className='text-sm  flex gap-1 items-center bg-red-600 text-white px-2 py-1 rounded-lg ml-4 mb-2' onClick={()=>setShowPopup(!showPopup)}><LiaEye/>View</button>
                <button className='text-sm  flex items-center bg-red-700 text-white px-2 py-1 rounded-lg  mb-2' onClick={closeCard}><MdOutlineClose/>Close </button>
                </div>
               
              </div>
    {/* tablet */}
    <div className="absolute hidden  lg:hidden md:flex flex-col bg-white border left-40  rounded-xl shadow-2xl border-b-4 border-gray-600  z-50"
              >
                <img className='rounded-t-xl' src={cardData.img} alt={cardData.title} style={{ width: '400px', height: '300px', marginBottom: '3px' }} />
                <h4 className=' pl-4 text-xl font-medium'>📌{cardData.title}</h4>
                <p className='text-sm font-normal text-gray-500 pl-6 pb-2 w-[290px]'>Floors: {cardData.floors}</p>
                <div className='flex items-center flex-row gap-2'>
                <button className='text-sm  flex gap-1 items-center bg-red-600 text-white px-2 py-1 rounded-lg ml-4 mb-2' onClick={()=>setShowPopup(!showPopup)}><LiaEye/>View</button>
                <button className='text-sm  flex items-center bg-red-700 text-white px-2 py-1 rounded-lg  mb-2' onClick={closeCard}><MdOutlineClose/>Close </button>
                </div>
               
              </div>
              </>
  )
}

export default Card