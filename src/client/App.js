import React from 'react';
import AppRoutes from './AppRoutes'; 
import CartSidebar from './components/CartSidebar';
import WishlistSidebar from './components/WishlistSidebar';
import ContextWrapper from './ContextWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import './index.css';

if (typeof window !== 'undefined') {
    require('react-toastify/dist/ReactToastify.css');
}


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContextWrapper>
        <ToastContainer />
        <Header />
        <CartSidebar />
        <WishlistSidebar />
        <div className="mb-6">
          <AppRoutes />
        </div>
        <Footer />
      </ContextWrapper>
    </div>
  );
}

export default App;
