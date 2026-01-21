import React from 'react'
import vjlogo from './vjlogo.png.png'
import vj from './vj.pdf'
import 7020014_Desk_Typing_3840x2160 from './7020014_Desk_Typing_3840x2160.mp4'
function Page1() {
  return (
    <>
      <nav className="navbar bg-dark text-white">
        <div className="container-fluid">
          <a
            className="navbar-brand text-white"
            href="#"
            style={{ fontFamily: '-apple-system' }}
          >
            <img
              src={vjlogo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Vijay Madira
          </a>

          <div className="navbar-nav d-flex flex-row gap-4 text-capitalize">
            <a href="#" className="nav-link text-white">home</a>
            <a href="#" className="nav-link text-white">skills</a>
            <a href="#" className="nav-link text-white">projects</a>
          </div>
        </div>
      </nav>

      <div className='bg-primary align-item-center' style={{width:"fit-content", height:"200px"}}>
        <h1
          className="text-center mt-5 text-white"
          style={{ fontFamily: 'cursive' }}
        >
          Hello welcome to my portfolio !
        </h1>

        <div className="text-center mt-3 d-flex justify-content-center gap-3">
          <button className="resume" type='button' >
            <a href={vj} className="nav-link" target='_blank' download={"vijay's resume"}>Resume</a>
          </button>
          <button className="github">
            <a href="https://github.com/madiravijay402" className="nav-link" target='_blank'>Github</a>
          </button>
          <button className="email">
            <a href="mailto:vijaymadira681@gmail.com" className="nav-link" target='_blank'>Email</a>
          </button>
        </div>
        <video src=""></video>
      </div>
    </>
  )
}

export default Page1
