import React, { useState } from 'react'

function Logg() {
    const[log,setlog]=useState(false);
  return (
    <>
    <div className="container" style={{width:200, height:200,backgroundColor:'black',display:'flex',flexDirection:'column',justifyContent:'center', gap:10,alignItems:'center'}}>
    <form action="">
    <label className='text-light'>email</label>
    <input type="email" name='email' /><br />
    <label className='text-light'>password</label>
    <input type="password" name='password' /><br />
    <button type='submit'>Login</button>
    </form>
    </div>
    </>
  )
}

export default Logg