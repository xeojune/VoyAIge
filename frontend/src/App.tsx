import React, { Suspense } from 'react';
import Home from './pages/Home/Home';
import TripPlanner from './pages/Main/TripPlanner';
import Login from './pages/Auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Auth/Register';
import ProtectedRoutes from './routes/ProtectedRoutes';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes/>} >
          <Route path="/TripPlanner" element={<TripPlanner />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App
