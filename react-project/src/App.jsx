import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NAvgate from './day36/NAvgate'
import About from './day36/About';
import Home from './day36/Home'
function App() {
  return (
    <>
      <NAvgate/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>

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

