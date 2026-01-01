import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
const UserProvider = ({ children }) => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const login = () => {
    return setIsLoggedIn(prev => !prev);
  }
  const logout = () => {
    return setIsLoggedIn(prev => !prev);
  }
  return (
    <UserContext.Provider value={{isLoggedIn,login,logout}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
