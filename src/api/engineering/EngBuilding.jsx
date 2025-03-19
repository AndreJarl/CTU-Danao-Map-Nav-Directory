import React, { useState } from 'react'
import Floor1 from './floors/EngFloor1'
import Floor2 from './floors/EngFloor2'
import Floor3 from './floors/EngFloor3'

function EngBuilding() {
    const [floorNum, setFloorNum] = useState(1);


    return(
        <>
           <div className='flex flex-col justify-center items-center gap-9 mt-10'>
               <p className='text-center font-bold text-4xl text-red-700'>COLLEGE OF ENGINEERING BUILDING</p>
                <div>   
             {floorNum === 1 ? (
                <Floor1 />
             ): floorNum === 2 ?(
                <Floor2 />
             ): floorNum === 3 ? (
                <Floor3 />
             ):(
                <p>LOADING..........</p>
             )}
         </div>   

          <div className='flex justify-center items-center gap-10'>
          <button
    onClick={() => setFloorNum(1)}
    className={`w-10 py-2 flex justify-center items-center ${
      floorNum === 1 ? "bg-red-600" : "bg-red-300"
    } text-white rounded shadow-sm hover:bg-red-600 shadow-slate-600`}
  >
    1
  </button>

  <button
    onClick={() => setFloorNum(2)}
    className={`w-10 py-2 flex justify-center items-center ${
      floorNum === 2 ? "bg-red-600" : "bg-red-300"
    } text-white rounded shadow-sm hover:bg-red-600 shadow-slate-600`}
  >
    2
  </button>

  <button
    onClick={() => setFloorNum(3)}
    className={`w-10 py-2 flex justify-center items-center ${
      floorNum === 3 ? "bg-red-600" : "bg-red-300"
    } text-white rounded shadow-sm hover:bg-red-600 shadow-slate-600`}
  >
    3
  </button>
          </div>
           </div>
        </>
    )
 

}

export default EngBuilding