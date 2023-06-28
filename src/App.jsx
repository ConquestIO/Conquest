import React from 'react';
import Home from './pages/Home';
import DashboardContainer from './pages/Dashboard/DashboardContainer';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<DashboardContainer />} />
  </Routes>
);

export default App;
