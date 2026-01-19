import React, { useState, useTransition } from 'react'
import './toggle.css'
function Toglec() {
  const [test,settest]=useState(false)

  return (
    <>
      <button onClick={()=>{settest(!test)}}>{test ? "hide":"expand"}</button>
      {test && <div className={`container ${test ? 'expand' : 'hide'}`}>
        <h1 className='text-light'>used && for toggle </h1>
      </div>
      }
    </>
  )
}

export default Toglec