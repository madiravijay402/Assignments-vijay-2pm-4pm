import React, { useState } from 'react'

function Login() {
    const[update,setupdate]=useState({email:"",password:""})
    const hand=(e)=>{
        setupdate({...update,[e.target.name]:e.target.value})
    }
    const def=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='box' style={{marginTop:50}}>
        <form onSubmit={def} className='card'>
            <label htmlFor="">email</label>
            <input type="email" name='email' value={update.email} onChange={hand}/>
            <label htmlFor="">password</label>
            <input type="password" name='password' value={update.password} onChange={hand}/>
            <button type='submit'>login</button>
        </form>
    </div>
  )
}

export default Login