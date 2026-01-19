import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logg from './day34/Logg'
import Cities from './day34/Cities'

function App() {
  return (
    <>
      <Logg/>
      <Cities names={["agra","delhi","mumbai","vizag","hyderabad"]}/>
    </>
  )
}

export default App
