import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
