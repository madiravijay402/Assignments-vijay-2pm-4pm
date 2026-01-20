import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logg from './day34/Logg'
import Cities from './day34/Cities'
import Toglec from './day34/Toglec'
import Ternery from './day34/Ternery'
import Todo from './day34/practical tasks/Todo'
import Product from './day34/practical tasks/Product'
function App() {
  return (
    <>
      <Logg/>
      <Cities names={["agra","delhi","mumbai","vizag","hyderabad"]}/>
      <Toglec/><br />
      <Ternery/>
      <Todo/>
      <Product/>
    </>
  )
}

export default App  
