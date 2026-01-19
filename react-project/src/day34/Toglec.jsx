import React, { useState, useTransition } from 'react'

function Toglec() {
  const [test,settest]=useState(false)
  const boxStyle = {
    maxHeight: open ? "200px" : "0px",
    opacity: open ? 1 : 0,
    overflow: "hidden",
    transition: "all 0.6s ease",
    background: "linear-gradient(to right,#1d1d1d,#454545)",
    color: "white",
    marginTop: "20px",
    padding: open ? "20px" : "0 20px"
  };

  return (
    <>
      <button onClick={()=>{settest(!test)}}>{test ? "hide":"expand"}</button>
      {test && <div style={boxStyle}>
        <h1 className='text-light'>used && for toggle </h1>
      </div>
      }
    </>
  )
}

export default Toglec