import React, { useState } from 'react'

function Cardp({children}) {
    const[tog,settog]=useState(false)
  return (
    <>
    <div className="container">
        <button onClick={()=>{settog(!tog)}}>{tog ?"hide":"tog"}</button>
        {tog && 
    <div className='card'>
        <div className="card-body">
          {children}
        <div className="card-title">vijay madira</div>
        <div className="card-text">i am software engineer currently pursving fullstack developer course in sla looking to contribut my skills to current world</div>
        </div>
    </div>
    }
    </div>
    </>
  )
}

export default Cardp