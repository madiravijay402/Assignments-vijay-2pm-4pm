import React from 'react'

function Cities({names}) {
  return (

    <div className='bg-black text-light' style={{marginTop:20}}>
        <h1>cities names</h1>
        <ul style={{listStyleType:'none'}}>
            {names.map((names,index)=>
            <li key={index} className='text-start'>{index+1}.{names}</li>
            )}
        </ul>

    </div>
  )
}

export default Cities