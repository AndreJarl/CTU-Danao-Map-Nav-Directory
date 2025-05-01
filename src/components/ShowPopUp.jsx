import React from 'react'
import buildingFloors from './BuildingFloors'
import { FaLongArrowAltLeft} from "react-icons/fa";
import { FaRightLong , FaLeftLong   } from "react-icons/fa6";

function ShowPopUp({query,closeSideBar,currentFloor,handleNextFloor,handlePreviousFloor}) {
  return (
    <div className="absolute w-full md:w-[90%] lg:w-[80%]  lg:h-[100%] 2xl:w-[75%] left-0 top-0 z-50 bg-black" >
          <div className="flex flex-col  overflow-hidden h-[100%] bg-white pt-10 relative px-10 shadow-2xl">
                    <button onClick={closeSideBar} className="flex gap-2 items-center absolute right-8 top-5 bg-red-600 hover:bg-red-800 text-white px-2 text-base lg:px-4 py-1 rounded-lg"><FaLongArrowAltLeft/> Close</button>
                    <p className="lg:text-4xl text-2xl font-medium">{query}</p>
                  
                  <div className="flex items-center flex-col  ">
                    
                      {buildingFloors[query]?.floorImages?.[currentFloor]}
    
                    
                    
                  </div>
                  <div className="flex  gap-4 items-center mt-5 md:-mt-10 lg:-mt-28 ">
                      <button 
                        onClick={handlePreviousFloor} 
                        className={`bg-blue-500 text-white flex items-center gap-2  lg:p-2 rounded p-1 text-xs lg:text-base
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
  )
}

export default ShowPopUp