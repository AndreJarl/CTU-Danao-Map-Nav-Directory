import React from 'react'

function Card({cardPosition, cardData}) {
  return (
    <div className="absolute bg-white border  rounded-xl shadow-2xl border-b-4 border-gray-600 pointer-events-none z-10"
    style={{
        left: cardPosition.x + 25,   // position to the right of cursor
        top: cardPosition.y - 110     // vertically centered to cursor

    }}
              >
                <img className='rounded-t-xl' src={cardData.img} alt={cardData.title} style={{ width: '290px', height: '200px', marginBottom: '3px' }} />
                <h4 className=' pl-4 text-xl font-medium'>📌{cardData.title}</h4>
                <p className='text-sm font-normal text-gray-500 pl-4 pb-2 w-[290px]'>{cardData.desc}</p>
              </div>
  )
}

export default Card