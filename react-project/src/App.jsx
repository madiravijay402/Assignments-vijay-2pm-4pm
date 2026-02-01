import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Input from './day36/Input';
import Multiple from './day36/Multiple';
import Reload from './day36/Reload';
import Checkbox from './day36/Checkbox';
import Check from './day36/Check';
function App() {
  return (
    <>
      <Input/>
      <Multiple/>
      <Reload/>
      <Checkbox/>
      <Check/>
    </>
  )
}

export default App  


