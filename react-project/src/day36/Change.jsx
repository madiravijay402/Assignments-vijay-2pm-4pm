
import React, { useEffect, useState } from 'react'

function Change() {
    const[count,setcount]=useState(0)
  useEffect(()=>{
    alert("state changed")
    setcount(count+1)
  },[count])
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>add</button>
      <p>{count}</p>
    </div>
  )
}

export default Change