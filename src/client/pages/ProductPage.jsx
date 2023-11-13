import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import data from '../data/data.json';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addItemToCart } = useContext(CartContext); 
  const { addItemToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    // Fetch the product details from data source based on productId
    const productData = data.categories
      .flatMap(category => category.products)
      .find(product => product.id.toString() === productId);
    setProduct(productData);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  const imagePath = require(`../images/products/${product.image}`);

    // Function to handle adding product to cart
    const handleAddToCart = () => {
      addItemToCart(product);
    };
  
    // Function to handle adding product to wishlist
    const handleAddToWishlist = () => {
      addItemToWishlist(product);
    };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-end">
          <img src={imagePath} alt={product.name} className="rounded-lg shadow-lg h-96" />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-red-500 text-2xl mb-3">${product.price}</p>
          <p className="text-lg mb-3">{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex gap-4">
            <button 
              className={`bg-yellow-500 text-white px-4 py-2 rounded ${!product.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handleAddToCart(product)}
              disabled={!product.isAvailable}
            >
              Add to Cart
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded transition duration-300 ease-in-out"
              onClick={() => handleAddToWishlist(product)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

