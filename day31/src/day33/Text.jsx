import React, { useState } from 'react'

function Text() {
    const [text,settext]=useState(false);
    const [input,setinput]=useState("");
  return (
    <>
    <h2>text toggle</h2>
    <button onClick={()=>{settext(!text)}}>{text ?"hide":"text"}</button>
    {text && <p>hello ,this is toggled text</p>}
    <br />
    <h2>input while typing</h2>
    <input type="text" onChange={(e)=>setinput(e.target.value)} placeholder='enter name'/>
    <p>{input}</p> 
    </>
  )
}

export default Text