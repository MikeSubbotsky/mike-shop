import React, { useState, useContext, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import CategoriesDropdown from './CategoriesDropdown';
import { SidebarVisibilityContext } from '../contexts/SidebarVisibilityContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const { setIsCartSidebarVisible, setIsWishlistSidebarVisible } = useContext(SidebarVisibilityContext);
    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const toggleCartSidebar = useCallback(() => {
        setIsCartSidebarVisible(prev => !prev);
    }, []);
    
    const toggleWishlistSidebar = useCallback(() => {
        setIsWishlistSidebarVisible(prev => !prev);
    }, []);

    const toggleCategoriesDropdown = useCallback(() => {
        setIsDropdownVisible(prev => !prev);
    }, []);

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <ul className="flex">
                    <li className="ml-6">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                isActive ? 'custom-underline hover:text-gray-400' : 'hover:text-gray-400'
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="ml-6 relative">
                        <div className='pb-2'
                            onMouseEnter={() => setIsDropdownVisible(true)}
                            onMouseLeave={() => setIsDropdownVisible(false)}
                            onClick={toggleCategoriesDropdown}
                        >
                            <span className="hover:text-gray-400 cursor-pointer">
                                Categories
                            </span>
                            {isDropdownVisible && <CategoriesDropdown />}
                        </div>
                    </li>
                </ul>
                <div>
                    <button onClick={toggleCartSidebar} className="relative mx-2">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-yellow-500 text-2xl hover:text-yellow-400 transition duration-300" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-block w-4 h-4 text-xs bg-red-600 text-white rounded-full text-center leading-4">
                                {cartItems.length}
                            </span>
                        )}
                    </button>
                    <button onClick={toggleWishlistSidebar} className="relative mx-2">
                        <FontAwesomeIcon icon={faHeart} className="text-pink-500 text-2xl hover:text-pink-400 transition duration-300" />
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-block w-4 h-4 text-xs bg-red-600 text-white rounded-full text-center leading-4">
                                {wishlistItems.length}
                            </span>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;


