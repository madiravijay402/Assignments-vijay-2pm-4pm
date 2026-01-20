import React from 'react'

function Userlist() {
    const users=[{id:1,name:"vijay",age:24,city:"hyderabad"},
    {id:2,name:"ajay",age:22,city:"mumbai"},
    {id:3,name:"sanjay",age:21,city:"delhi"},]
  return (
    <div>
        <h1>User list from array of objects</h1>
        <div className='container-lg bg-light' style={{width:400,height:500,display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ul style={{listStyle:'none'}} className='text-start bg-dark text-light'>
        {users.map((user)=>{

           return( <li key={user.id}>
                <span style={{borderBottom: '1px solid #ddd'}}>{user.name}</span>
                <span style={{float:'right', color:'greenyellow',borderBottom: '1px solid #ddd',}} className='text-end'>{user.city}</span>
            </li>
           )
        })}
        </ul>
        </div>
    </div>
  )
}

export default Userlist