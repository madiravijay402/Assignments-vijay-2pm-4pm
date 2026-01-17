import React,{useState} from 'react'

function Inputapp() {
    const[input,setinput]=useState("")
    const handlechange=(e)=>{
        setinput({...input,[e.target.name]:e.target.value});
    };
  return (
    <>
    <div>Inputapp</div>
    {/* <input type="text" onChange={(e)=>{setinput(e.input.value)}}/> */}
    <p>preview : {input.name}</p>
    <p>preview :{input.email}</p>
    <form action="" >
        <label htmlFor="">name</label>
        <input type="text" name="name"onChange={handlechange}/>
        <label>email</label>
        <input type="email" name="email" onChange={handlechange}/>
        <button type='submit'>login</button>
    </form>
    </>
  )
}

export default Inputapp