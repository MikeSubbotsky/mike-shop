import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { SidebarVisibilityContext } from '../contexts/SidebarVisibilityContext';


const CartSidebar = () => {
    const { cartItems, incrementQuantity, decrementQuantity, cartTotal } = useContext(CartContext);
    const { isCartSidebarVisible, setIsCartSidebarVisible } = useContext(SidebarVisibilityContext);

    if (!isCartSidebarVisible) return null;

    const closeSidebar = () => setIsCartSidebarVisible(false);

return (
        <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 overflow-auto">
            <button onClick={closeSidebar} className="absolute top-1 right-4 text-gray-700 text-2xl p-2 hover:text-gray-500 transition duration-300">
                &times; {/* Close (×) button */}
            </button>
            {console.log("Cart rendered")}
            <div className="p-4 text-black">
                <h2 className="text-xl font-bold mb-4 p-2 rounded">Your Cart</h2>
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex items-start justify-between mb-4 hover:bg-gray-100">
                            <Link to={`/product/${item.id}`} className="flex items-center">
                                <img src={require(`../images/products/${item.image}`)} alt={item.name} className="w-12 h-12 rounded-full mr-2" />
                                <div>
                                    <div className="font-bold">{item.name}</div>
                                    <div className="text-gray-600">${(item.price * item.quantity).toFixed(2)} ({item.quantity}x)</div>
                                </div>
                            </Link>
                            <div className="flex flex-col items-start space-y-1">
                                <button onClick={() => incrementQuantity(item.id)} className="text-lg hover:text-blue-500 transition duration-300 w-6 h-4">
                                    +
                                </button>
                                <button onClick={() => decrementQuantity(item.id)} className="text-lg hover:text-red-500 transition duration-300 w-6 h-4">
                                    -
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is currently empty.</p>
                )}
                <hr className="my-4" />
                <div className="text-lg font-bold">
                    Total: <span className="text-xl">${cartTotal.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;


