import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const imagePath = require(`../images/categories/${category.image}`);


  return (
    <div className="p-4 card transform transition duration-300 hover:scale-105 hover:bg-purple-200 hover:bg-opacity-40">
      <Link to={`/category/${category.id}`}>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full" src={imagePath} alt={category.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{category.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
