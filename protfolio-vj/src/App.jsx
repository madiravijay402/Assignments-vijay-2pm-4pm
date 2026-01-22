import { useState } from 'react'
import React from 'react';
import { Route, Router, Routes } from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Page1/>
    <Routes>
      <Route path="/Page1" element={<Page1 />} />
      
    </Routes>
    <Page2/>
    </>
  )
}

export default App
