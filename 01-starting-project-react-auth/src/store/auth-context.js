import React, { useState } from 'react';

const AuthContext = React.createContext({
  // property values
  token: '',
  isLoggedIn: false,
  // property functions
  login: (token) => { },
  logout: () => { }
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime(); // in milliseconds
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
}

// setup as a wrapper for child components
// export as a named const
export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken)

  const userIsLoggedIn = !!token; // !! converts truthy to boolean value

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);

    const remainingTime = calculateRemainingTime(expirationTime);

    setTimeout(logoutHandler, remainingTime);
  };



  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
};

export default AuthContext;

