import React, { useEffect, useState } from 'react'

function Title() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        document.title=`Count:${count}`
    },[count])
  return (
    <div>
        <button onClick={()=>setcount(count+1)}>update</button>
        <p>{count}</p>
    </div>
  )
}

export default Title