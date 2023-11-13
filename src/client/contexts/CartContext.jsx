import React, { createContext, useState, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = useCallback((item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
            toast.success(`${item.name} quantity increased!`, { position: "bottom-right" });
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            toast.success(`${item.name} added to cart!`, { position: "bottom-right" });
        }
    }, [cartItems]);

    const removeItemFromCart = useCallback((item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        toast.error(`${item.name} removed from the cart!`, { position: "bottom-right" });
    }, [cartItems]);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    const cartTotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    const incrementQuantity = useCallback((itemId) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
        toast.success(`Item quantity increased!`, { position: "bottom-right" });
    }, [cartItems]);

    const decrementQuantity = useCallback((itemId) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        ).filter(item => item.quantity > 0));
        toast.error(`Item removed from the cart!`, { position: "bottom-right" });
    }, [cartItems]);

    return (
        <CartContext.Provider value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
            incrementQuantity,
            decrementQuantity,
            clearCart,
            cartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

