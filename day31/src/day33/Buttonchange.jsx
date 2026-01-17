import React, { useState } from 'react'

function Buttonchange() {
     const[change,setchange]=useState("")
  return (
    <>
    <div className='container'>
    <button><input type="text" onChange={(e)=>{setchange(e.input.value)}} />{change}</button>
    </div>
    </>
  )
}

export default Buttonchange