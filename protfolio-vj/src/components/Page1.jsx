import React from 'react'
import vjlogo from './vjlogo.png.png'
import vj from './vj.pdf'
import smallgif from './smallgif.mp4'
import './Page1.css'

function Page1() {
  return (
    <>
      <nav className="navbar navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand text-white brand" href="#">
            <img src={vjlogo} alt="Logo" />
            Vijay Madira
          </a>

          <div className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Skills</a>
            <a href="#" className="nav-link">Projects</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <h1>Hello, welcome to my portfolio!</h1>

        <div className="btn-group">
          <a
            href={vj}
            download="Vijay_Madira_Resume"
            className="btn resume"
          >
            Resume
          </a>

          <a
            href="https://github.com/madiravijay402"
            target="_blank"
            rel="noopener noreferrer"
            className="btn github"
          >
            GitHub
          </a>

          <a
            href="mailto:vijaymadira681@gmail.com"
            className="btn email"
          >
            Email
          </a>
        </div>

        <video
          src={smallgif}
          autoPlay
          loop
          muted
          className="hero-video"
        />
      </section>
    </>
  )
}

export default Page1
