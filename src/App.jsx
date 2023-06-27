import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={(<div>REPLACE WITH DASHBOARD CONTAINER</div>)} />
  </Routes>
);

export default App;
