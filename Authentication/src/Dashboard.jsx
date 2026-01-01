import React, { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

const Dashboard = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <div className="dashboard">
      {!isLoggedIn && <b>Please login to access your dashboard</b>}
    {isLoggedIn && <b>This is your dashboard</b>}
    </div>
  );
};

export default Dashboard;
