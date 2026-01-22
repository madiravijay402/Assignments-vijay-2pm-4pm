import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
