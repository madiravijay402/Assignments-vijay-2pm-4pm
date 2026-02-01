import React, { useState } from 'react'

function Multiple() {
 const[update,setupdate]=useState({
    username:"",email:""
 })
const handlechange=(e)=>{
    setupdate({...update,[e.target.name]:e.target.value})
}
  return (
    <>  
        <div className='card'>
        <form action="" className='card'>
        <label htmlFor="">Name</label>
        <input type="text" name='username' value={update.username} onChange={handlechange}/>
        <label htmlFor="">email</label>
        <input type="email" name='email' value={update.email} onChange={handlechange}/>
        <button type='submit'>login</button>
        </form>
        <p>name:{update.username}  email:{update.email}</p>
        </div>
    </>
  )
}

export default Multiple