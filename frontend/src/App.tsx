import React from 'react';
import Home from './pages/Home/Home';
import TripPlanner from './pages/Main/TripPlanner';
import Login from './pages/Auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Auth/Register';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TripPlanner" element={<TripPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App
