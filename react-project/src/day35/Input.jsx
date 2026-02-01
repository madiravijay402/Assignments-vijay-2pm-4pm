import React, { useState } from 'react'

function Input() {
    const[name,setname]=useState("")
  return (
    <>
        <form action="">
            <label htmlFor="">name</label>
            <input type="text" name='name' value={name} onChange={(e)=> setname(e.target.value)}/>
        </form>
        <p>value : {name}</p>
    </>
  )
}

export default Input