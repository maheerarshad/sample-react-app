import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';  // Ensure this path is correct
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
