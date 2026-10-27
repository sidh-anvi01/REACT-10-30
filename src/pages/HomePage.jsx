import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate =useNavigate() 

  return (
    <div>
      <h1>this is home page </h1>


      <button onClick={()=>navigate('/setting')}>go to setting  </button>
    </div>
  )
}

export default HomePage
