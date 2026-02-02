import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import './App.css'
import Home from './day37/Home'
import About from './day37/About'
import Contact from './day37/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav className="flex justify-center gap-10 p-4 bg-gray-900 shadow-md">
          <Link to="/" className="text-white text-lg font-medium hover:text-sky-400 transition">Home</Link> |{" "}
          <Link to="/about" className="text-white text-lg font-medium hover:text-sky-400 transition">About</Link>
          <Link to="/about/contact" className="text-white text-lg font-medium hover:text-sky-400 transition">contact me</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
