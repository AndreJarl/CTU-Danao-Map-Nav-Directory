import React, { useState, useEffect } from 'react';
import buildingFloors from './BuildingFloors';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRightLong, FaLeftLong } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import buildingFloors from './BuildingFloors';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRightLong, FaLeftLong } from "react-icons/fa6";

function ShowPopUp({ query, closeSideBar, currentFloor, handleNextFloor, handlePreviousFloor }) {
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsSliding(false), 150);
  }, []);

  const handleClose = () => {
    setIsSliding(true);
    setTimeout(closeSideBar, 150);
  };

  return (
    <>
      <div className={`fixed w-full md:w-[90%] lg:w-[80%] h-screen pt-0 md:pt-0 lg:pt-0 lg:h-[100%] 2xl:w-[75%] left-0 top-0 z-[999] transition-transform duration-150 ease-in-out ${isSliding ? '-translate-x-full' : 'translate-x-0'} backdrop-blur-xl backdrop-filter`}>
        <div className="flex flex-col overflow-hidden h-screen pt-28 md:pt-10 lg:h-[100%] lg:pt-10 relative px-10 shadow-2xl">
          <button
            onClick={handleClose}
            className="flex gap-2 items-center absolute right-8 top-5 bg-red-600 hover:bg-red-800 text-white px-2 text-base lg:px-4 py-1 rounded-lg"
          >
            <FaLongArrowAltLeft /> Close
          </button>
          <p className="lg:text-4xl text-2xl font-medium">{query}</p>

          <div className="flex items-center flex-col">
            {buildingFloors[query]?.floorImages?.[currentFloor]}
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-16 md:gap-[120px] lg:gap-[200px]">
            <button
              onClick={handlePreviousFloor}
              className={`bg-blue-500 text-white flex items-center gap-2 lg:p-2 rounded p-1 text-xs lg:text-base
                ${buildingFloors[query]?.totalFloors > 1 && currentFloor > 1 ? '' : 'invisible'}`}
            >
              Previous Floor <FaLeftLong />
            </button>

            <button
              onClick={handleNextFloor}
              className={`bg-blue-500 text-white flex gap-2 items-center lg:p-2 rounded p-1 text-xs lg:text-base
                ${buildingFloors[query]?.totalFloors > 1 && currentFloor < buildingFloors[query]?.totalFloors ? '' : 'invisible'}`}
            >
              Next Floor <FaRightLong />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowPopUp;