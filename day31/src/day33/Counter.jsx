import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count,setcount]=useState(0);
  return (
    <>
    <div className="container">
    <h1>DAY 33 Assignment</h1>
    <p>count incresing button</p>
    <div>{count}</div>
    <button onClick={()=>{setcount(count+1)}}>increase</button>
    </div>
    </>
  )
}

export default Counter