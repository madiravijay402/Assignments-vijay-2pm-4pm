import React from 'react';
import vjlogo from './vjlogo.png.png';
import vj from './vj.pdf';
import smallgif from './smallgif.mp4';
import './Page1.css';

function Page1() {
  return (
    <div className="page-wrapper">
      <nav className="navbar-custom">
        <div className="nav-container">
          <a className="brand" href="#">
            <img src={vjlogo} alt="Logo" />
            <span>Vijay Madira</span>
          </a>

          <div className="nav-links">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Skills</a>
            <a href="#" className="nav-link">Projects</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="text-area">
            <h1>Hello, welcome to <br /><span>my portfolio!</span></h1>
            
            <div className="btn-group">
              <a href={vj} download="Vijay_Madira_Resume" className="btn resume">
                Resume
              </a>
              <a href="https://github.com/madiravijay402" target="_blank" rel="noopener noreferrer" className="btn github">
                GitHub
              </a>
              <a href="mailto:vijaymadira681@gmail.com" className="btn email">
                Email
              </a>
            </div>
          </div>

          <div className="video-container">
            <video
              src={smallgif}
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page1;