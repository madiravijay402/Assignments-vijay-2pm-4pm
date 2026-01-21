import React from 'react'
import vjlogo from './vjlogo.png.png'

function Page1() {
  return (
    <>
      <nav className="navbar   bg-dark text-white">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#" style={{fontFamily:'-apple-system'}}>
            <img
              src={vjlogo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
           Vijay Madira
          </a>
           <div className="navbar-nav d-flex flex-row gap-4 text-captialize">
            <a href="#" className='nav-link text-white'>home</a>
            <a href="#" className='nav-link text-white'>skills</a>
            <a href="#"className='nav-link text-white'>projects</a>
           </div>
        </div>
      </nav>
      <div>
      <div>
        <h1 className='text-center mt-5 text-white' style={{fontFamily:'cursive'}}>Hello welcome to my portfolio !</h1>
      </div>
      <button>Resume</button>
      <button>Github</button>
      </div>
    </>
  )
}

export default Page1
