import React from 'react'
import {Link} from 'react-router-dom'
function NAvgate() {
  return (
    <nav className='nav-link'>
        <Link to="/About">Home</Link>
        <Link to="/Home">About</Link>
    </nav>
  )
}

export default NAvgate