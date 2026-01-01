import React from 'react';
import { UserProvider } from './UserContext.jsx';
import Navbar from './Navbar.jsx';
import Dashboard from './Dashboard.jsx';
import "./styles.css";
const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default App;
