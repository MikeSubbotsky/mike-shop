// src/contexts/SidebarVisibilityContext.js
import React, { createContext, useState } from 'react';

export const SidebarVisibilityContext = createContext();

const SidebarVisibilityProvider = ({ children }) => {
    const [isCartSidebarVisible, setIsCartSidebarVisible] = useState(false);
    const [isWishlistSidebarVisible, setIsWishlistSidebarVisible] = useState(false);

    return (
        <SidebarVisibilityContext.Provider value={{ isCartSidebarVisible, setIsCartSidebarVisible, isWishlistSidebarVisible, setIsWishlistSidebarVisible }}>
            {children}
        </SidebarVisibilityContext.Provider>
    );
};

export default SidebarVisibilityProvider;