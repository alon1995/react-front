import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="background-image">
        <div className="overlay">
          <h1 className="logo">Welcome to Best Restaurant</h1>
        </div>
      </div>
      <Link to="/categories" className="view-menu-link">View Menu</Link>
    </div>
  );
};

export default MainPage;