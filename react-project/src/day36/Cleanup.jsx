import React, { useEffect, useState } from 'react'

function Cleanup() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        const timer=setInterval(()=>{
            setcount(count+1)
        },1000)
        return () => {
      clearInterval(timer)
      alert("Timer stopped")
    }
    },[])
    
  return (
    <div>
        <p>count:{count}</p>
    </div>
  )
}

export default Cleanup