import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const imagePath = require(`../images/products/${product.image}`);

  return (
    <div className="p-4 card transform transition duration-300 hover:scale-105 hover:bg-purple-200 hover:bg-opacity-40">
      <Link to={`/product/${product.id}`}>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={imagePath} alt={product.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
