import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!auth) {
      navigate('/login')
    }
  },[])
  return (
    <div>
      <h1 style={{ fontSize:"50px", color: "orange"}}>Welcome to the Dashboard</h1>  
    </div>
  );
};

export default Dashboard;
