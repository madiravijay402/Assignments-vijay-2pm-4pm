import React, { useState } from 'react'

function Resetcounter() {
    const[count,setcount]=useState(0);
  return (
    <>
    <div>Resetcounter</div>
    <p>{count}</p>
    <button onClick={()=>{setcount(count+1)}}>increse</button>
    <button onClick={()=>{setcount(count-1)}}>decrease</button>
    <button onClick={()=>setcount(0)}>reset</button>
    </>
  )
}

export default Resetcounter