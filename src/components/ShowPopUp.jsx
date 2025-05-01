import React, { useState, useEffect } from 'react';
import buildingFloors from './BuildingFloors';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaRightLong, FaLeftLong } from "react-icons/fa6";

function ShowPopUp({ query, closeSideBar, currentFloor, handleNextFloor, handlePreviousFloor }) {
  const [isSliding, setIsSliding] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastQuery, setLastQuery] = useState(query);

  useEffect(() => {
    setTimeout(() => setIsSliding(false), 150);
  }, []);

  useEffect(() => {
    if (query) {
      setLastQuery(query);
    }
  }, [query]);

  const handleToggle = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsVisible(!isVisible);
      if (isVisible) {
        closeSideBar();
      }
      setIsSliding(false);
    }, 150);
  };

  const displayQuery = isVisible ? query : lastQuery;

  return (
    <>
      {!isVisible && (
        <button
          onClick={handleToggle}
          className="fixed left-5 top-5 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-50 transition-colors duration-150"
          title="Open Building Info"
        >
          <FaRightLong className="text-xl" />
        </button>
      )}

      {isVisible && (
        <div
          className={`fixed w-full md:w-[90%] lg:w-[80%] h-screen pt-0 md:pt-0 lg:pt-0 lg:h-[100%] 2xl:w-[75%] left-0 top-0 z-[999] transition-transform duration-150 ease-in-out ${
            isSliding ? '-translate-x-full' : 'translate-x-0'
          } backdrop-blur-lg backdrop-filter`}
        >
          <div className="flex flex-col overflow-hidden h-screen pt-28 md:pt-10 lg:h-[100%] lg:pt-10 relative px-10 shadow-2xl bg-[rgba(255,255,255,0.1)]">
            <button
              onClick={handleToggle}
              className="flex gap-2 items-center absolute right-8 top-5 bg-red-600 hover:bg-red-800 text-white px-2 text-base lg:px-4 py-1 rounded-lg transition-colors duration-150"
            >
              <FaLongArrowAltLeft /> Close
            </button>
            <p className="lg:text-4xl text-2xl font-medium">{displayQuery}</p>

            <div className="flex items-center flex-col">
              {buildingFloors[displayQuery]?.floorImages?.[currentFloor]}
            </div>

            <div className="fixed bottom-10 left-[10%] right-[10%] flex justify-between items-center w-full max-w-4xl px-4">
              <button
                onClick={handlePreviousFloor}
                className={`bg-blue-500 text-white flex items-center gap-2 lg:p-2 rounded p-1 text-xs lg:text-base transition-colors duration-150
                  ${buildingFloors[displayQuery]?.totalFloors > 1 && currentFloor > 1 ? '' : 'invisible'}`}
              >
                Previous Floor <FaLeftLong />
              </button>
            
              <button
                onClick={handleNextFloor}
                className={`bg-blue-500 text-white flex gap-2 items-center lg:p-2 rounded p-1 text-xs lg:text-base transition-colors duration-150
                  ${buildingFloors[displayQuery]?.totalFloors > 1 && currentFloor < buildingFloors[displayQuery]?.totalFloors ? '' : 'invisible'}`}
              >
                Next Floor <FaRightLong />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowPopUp;
