import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={logout}>Logout</button>
      <br />
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
    </div>
  );
};

export default Home;
