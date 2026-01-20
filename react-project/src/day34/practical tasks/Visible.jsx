import React, { useState } from 'react'

function Visible() {
    const[visible,setvisible]=useState(false)
    const items=[{id:1,name:"apple",price:100,wieght:"1kg"},
    {id:2,name:"banana",price:50,wieght:"1dozen"},
    {id:3,name:"grapes",price:200,wieght:"1kg"},]
  return (
    <>
     <button onClick={() => setvisible(!visible)} className='bg-primary'>{visible ? 'hide':'show'}</button>
     {visible && 
      <div className="bg-success text-white p-3 rounded">
        <ul style={{listStyle:'none'}} className='list-group'>
            {items.map(item=>(
                <li key={item.id}  className="list-group-item d-flex justify-content-between align-items-center mb-2">
                    <span className='badge text-wrap text-bg-primary rounded'>{item.name}</span>
                    <span className='text-success'>₹{item.price}</span>
                    <span className='badge bg-secondary'>{item.wieght}</span>
                </li>
            ))}
        </ul>
      </div>
     }
    </>
  )
}

export default Visible