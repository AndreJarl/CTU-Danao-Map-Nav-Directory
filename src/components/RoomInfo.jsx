import React from 'react'
import eeLab from "../api/engineering/img/EELAB03.jpg";
import ceLab1 from "../api/engineering/img/CELAB01.jpg";
import feCR1 from "../api/engineering/img/LCR103.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

function RoomInfo({ showInfoPanel, setShowInfoPanel, roomInfo, emoji }) {
  const hasRoomInfo = roomInfo && Object.keys(roomInfo).length > 0;

  return (
    <div className={`fixed right-0 top-0 bottom-0 border-2 py-2 border-opacity-50 border-gray-400 overflow-y-auto px-4 h-screen md:h-screen lg:h-screen bg-white shadow-2xl p-2 transform transition-transform ease-in-out duration-700 z-[1000] ${showInfoPanel ? 'translate-x-[100%]' : 'translate-x-full'} w-[25%] md:w-[25%] lg:w-[25%]`}>
      <div className="p-4 flex flex-col gap-3 px-5 overflow-y-auto">
        <button
          onClick={() => setShowInfoPanel(false)}
          className="absolute right-4 top-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-150"
          title="Close Room Info"
        >
          <AiOutlineClose className="text-xl" />
        </button>

        {hasRoomInfo ? (
          <>
            <h2 className="text-2xl lg:text-3xl font-semibold text-shadow-lg">{emoji} {roomInfo?.name}</h2>
            <h3 className="mb-2 font-medium text-gray-700 text-base">{roomInfo.key}</h3>
            <img className='w-full' src={roomInfo.image} alt="" />
            <i className="text-xs text-red-500 font-normal text-center">image of {roomInfo.key}</i>
            <p className="mb-14">{roomInfo.description}</p>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500">
            <p className="text-sm">Select a room</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RoomInfo;