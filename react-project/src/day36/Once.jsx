import React, { useEffect, useState } from 'react'

function Once() {
  const[count,setcount]=useState(0)
  useEffect(()=>{
    setcount(count+1)
  },[])
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>add</button>
      <p>{count}</p>
    </div>
  )
}

export default Once