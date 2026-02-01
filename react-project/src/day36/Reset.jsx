import React, { useState } from 'react'

function Reset() {
    const[intial,setintial]=useState({name:"",number:""})
    const handlechange=(e)=>{
        setintial({...intial,[e.target.name]:e.target.value})
    }
    const reset=()=>{
        setintial({name:"",number:""});
    }
    const Reload=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='card' style={{marginTop:20}}>
        <form onSubmit={Reload}>
            <label htmlFor="">name</label>
            <input type="text" name='name' placeholder='enter the name'  value={intial.name} onChange={handlechange}/>
            <label htmlFor="">phone</label>
            <input type="number" name='number' placeholder='enter your number'value={intial.number} onChange={handlechange}  />
            <button type='button' onClick={reset}>reset</button>
            <button>login</button>
        </form>
    </div>
  )
}

export default Reset