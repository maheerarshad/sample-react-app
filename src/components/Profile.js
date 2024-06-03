import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>This is your Profile Page!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
