import React from 'react';
import CartContextProvider from './contexts/CartContext';
import WishlistContextProvider from './contexts/WishlistContext';
import SidebarVisibilityProvider from './contexts/SidebarVisibilityContext';

const ContextWrapper = ({ children }) => {
  return (
    <CartContextProvider>
      <WishlistContextProvider>
        <SidebarVisibilityProvider>
          {children}
        </SidebarVisibilityProvider>
      </WishlistContextProvider>
    </CartContextProvider>
  );
};

export default ContextWrapper;
