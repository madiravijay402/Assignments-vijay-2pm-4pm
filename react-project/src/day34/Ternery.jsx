
import React, {useState} from 'react'

function Ternery() {
    const [age,setage]=useState(0);
  return (
    <>
    <button onClick={()=>setage(age+1)} className='bg-danger' style={{marginTop:200}}>increase</button>
    <div>{age}</div>
    <div>{age >=18? "you are an adult":"you are a minor"}</div>
    </>
  )
}

export default Ternery