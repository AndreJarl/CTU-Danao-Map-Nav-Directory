import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='text-center text-red-700 text-7xl mt-36'>
      <p>LANDING PAGE IS STILL IN DEVELOPMENT........</p>
      {/* i am pia kkk*/}
      <Link to='/map'><p className='text-center text-blue-500 underline'>View map here</p></Link>
    </div>
  )
}

export default Home