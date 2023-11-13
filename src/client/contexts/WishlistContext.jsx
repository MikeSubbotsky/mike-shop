import React, { createContext, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addItemToWishlist = useCallback((item) => {
        if (!wishlistItems.some(wishlistItem => wishlistItem.id === item.id)) {
            setWishlistItems(prevItems => [...prevItems, item]);
            toast.success(`Item added to wishlist!`, { position: "bottom-right" });
        }
    }, [wishlistItems]); 

    const removeItemFromWishlist = useCallback((itemId) => {
        setWishlistItems(prevItems => prevItems.filter(wishlistItem => wishlistItem.id !== itemId));
        toast.error(`Item removed from wishlist!`, { position: "bottom-right" });
    }, [wishlistItems]); 

    const clearWishlist = useCallback(() => {
        setWishlistItems([]);
    }, []); 

    return (
        <WishlistContext.Provider value={{
            wishlistItems,
            addItemToWishlist,
            removeItemFromWishlist,
            clearWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContextProvider;

