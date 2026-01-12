import React from 'react'

function Usercard({name,courses,nokku}) {
  return (
    <>
    <div>{name}</div>
    <ul style={{listStyleType:"none"}}>
    {courses.map(course=>(
        <li key={course}>{course}</li>
    ))}
    </ul>
    <button onClick={nokku}>Nokku</button>
    </>
  )
}

export default Usercard