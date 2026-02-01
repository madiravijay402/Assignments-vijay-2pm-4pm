import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Input from './day36/Input';
import Multiple from './day36/Multiple';
import Reload from './day36/Reload';
function App() {
  return (
    <>
      <Input/>
      <Multiple/>
      <Reload/>
    </>
  )
}

export default App  

// import { Routes, Route } from 'react-router-dom';
// import './App.css';
// import NAvgate from './day36/NAvgate';
// import Home from './day36/Home';
// import About from './day36/About';

// function App() {
//   return (
//     <>
//       <NAvgate />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

