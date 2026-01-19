import React from 'react'

function Cities({names}) {
  return (

    <div className='container-sm bg-black text-light' style={{marginTop:20}}>
        <h1>cities names</h1>
        <ul style={{listStyleType:'none'}}>
            {names.map((names)=>
            <li key={names}>{names}</li>
            )}
        </ul>

    </div>
  )
}

export default Cities