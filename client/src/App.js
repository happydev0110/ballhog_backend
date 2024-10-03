import React, { useEffect, useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, Link, Navigate, RouterProvider } from 'react-router-dom';
import Login from './components/loginUser/loginUser';
import Dashboard from './components/dashboard/dashboard';
import AuthContext from './context/AuthContext';
import Cookies from 'js-cookie'
import Root from './components/Root';
import Register from './components/registerUser/registerUser';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("token");
    if (user) {
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/welcome' element={<div>Welcome user</div>} />
      </Route>
    )
  )

  return (
    <AuthContext.Provider value={{ auth, setAuth, setAccountCreated, accountCreated }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
};

export default App;