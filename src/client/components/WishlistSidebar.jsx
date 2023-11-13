import React, { useContext } from 'react';
import { WishlistContext } from '../contexts/WishlistContext';
import { SidebarVisibilityContext } from '../contexts/SidebarVisibilityContext';
import { Link } from 'react-router-dom';

const WishlistSidebar = () => {
    const { wishlistItems, removeItemFromWishlist } = useContext(WishlistContext);
    const { isWishlistSidebarVisible, setIsWishlistSidebarVisible } = useContext(SidebarVisibilityContext);

    if (!isWishlistSidebarVisible) return null;

    const closeSidebar = () => setIsWishlistSidebarVisible(false);

    return (
        <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 overflow-auto">
            <button onClick={closeSidebar} className="absolute top-1 right-4 text-gray-700 text-2xl p-2 hover:text-gray-500 transition duration-300">
                &times; {/* Close (×) button */}
            </button>
            <div className="p-4 text-black">
                <h2 className="text-xl font-bold mb-4 p-2 rounded">Your Wishlist</h2>
                {wishlistItems.length > 0 ? (
                    wishlistItems.map((item) => (
                        <div key={item.id} className="flex items-start justify-between mb-4 hover:bg-gray-100">
                            <Link to={`/product/${item.id}`} className="flex items-center">
                                <img src={require(`../images/products/${item.image}`)} alt={item.name} className="w-12 h-12 rounded-full mr-2" />
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-gray-600">${item.price.toFixed(2)}</div>
                                </div>
                            </Link>
                            <button onClick={() => removeItemFromWishlist(item.id)} className="mr-1 text-red-500 hover:text-red-700 text-xl">
                                &times;
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Your wishlist is currently empty.</p>
                )}
            </div>
        </div>
    );
};

export default WishlistSidebar;

