import React, { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

const Navbar = () => {
  const { login, logout,isLoggedIn } = useContext(UserContext);
  return (
    <nav>
      <h1>App</h1>
      {isLoggedIn && <p>Welcome, User!</p>}
      {!isLoggedIn && (
        <button onClick={login}>Login</button>
      )}
      {isLoggedIn && (
        
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
