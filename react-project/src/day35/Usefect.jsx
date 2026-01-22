import React, { useEffect, useState } from 'react'

function Usefect() {
    const[count,setcount]=useState(0);
    useEffect(()=>{
        setcount(pre=>pre+1)
    })
  return (
    <div>Usefect</div>
  )
}

export default Usefect