import React,{useState} from 'react'

function Inputapp() {
    const[input,setinput]=useState("")
  return (
    <>
    <div>Inputapp</div>
    {/* <input type="text" onChange={(e)=>{setinput(e.input.value)}}/> */}
    <p>preview : {input}</p>
    <form action="" onChange={(e)=>{setinput(e.input.value)}}>
        <label htmlFor="">name</label>
        <input type="text" name='name'/>
        <label htmlFor="">email</label>
        <input type="email" name='email'/>
        <button type='submit'>login</button>
    </form>
    </>
  )
}

export default Inputapp