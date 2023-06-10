import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import CategoriesPage from './Pages/CategoriesPage';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
  );
};

export default App;