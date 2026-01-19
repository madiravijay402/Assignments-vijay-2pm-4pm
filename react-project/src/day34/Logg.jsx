import React, { useState } from 'react'

function Logg() {
    const[log,setlog]=useState(false);
    function success(e){
      e.preventDefault();
      if(e.target.email.value===" "){
        alert("email is required")
      }
      if(e.target.password.value===" "){
        alert("password is required")
      }
      if(e.target.email.value==="vijaymadira681@gmail.com" && e.target.password.value==="vijay123"){
         alert("login successful")
      }
      else{
        alert("login failed")
      }
    }
  return (
    <>
    <div className="container" style={{width:200, height:200,backgroundColor:'black',display:'flex',flexDirection:'column',justifyContent:'center', gap:10,alignItems:'center',border:2,borderColor:'black',borderStyle:'solid',borderRadius:10,padding:20,marginTop:50}}>
    <form onSubmit={success}>
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