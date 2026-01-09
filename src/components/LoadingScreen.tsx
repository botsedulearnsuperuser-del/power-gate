import React from 'react';
import './LoadingScreen.css';
import logo from '../assets/BHC LOGO (2).png';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={logo} alt="BHC Logo" className="loading-logo" />
      </div>
    </div>
  );
};

export default LoadingScreen;
