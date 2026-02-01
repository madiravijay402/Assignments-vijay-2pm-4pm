import React, { useState } from 'react'

function Reload() {
    
    const handlechange=(e)=>{
        e.preventDefault(e);
       alert("form submitted without reloading")
    }
  return (
    <div style={{marginTop:20}}>
        <form action="" onSubmit={handlechange} className='card'>
            <label htmlFor="">name</label>
            <input type="text" name='name'  />
            <label htmlFor="">email</label>
            <input type="email" name='email' />
            <button type='submit'>login</button>
        </form>
    </div>
  )
}

export default Reload