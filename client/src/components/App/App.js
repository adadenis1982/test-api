import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Search from '../Search/Search';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

