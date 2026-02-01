import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Input from './day35/Input';
import Multiple from './day35/Multiple';
import Reload from './day35/Reload';
import Checkbox from './day35/Checkbox';
import Check from './day35/Check';
import Reset from './day35/Reset';
import Login from './day35/progressive project/Login';
import Sign from './day35/progressive project/Sign';
import Profile from './day35/progressive project/Profile';
function App() {
  return (
    <>
      <Input/>
      <Multiple/>
      <Reload/>
      <Checkbox/>
      <Check/>
      <Reset/>
      <Login/>
      <Sign/>
      <Profile/>
    </>
  )
}

export default App  


