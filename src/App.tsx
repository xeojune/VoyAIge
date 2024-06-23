import React from 'react';
import Home from './pages/Home';
import TripPlanner from './pages/TripPlanner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TripPlanner" element={<TripPlanner />} />
      </Routes>
    </Router>
  );
};

export default App
