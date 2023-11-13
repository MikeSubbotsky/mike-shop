import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json'; 

const CategoriesDropdown = () => {
    return (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-lg z-10">
            <ul className="text-gray-700">
                {data.categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={`/category/${category.id}`}
                            className="block px-4 py-2 hover:bg-gray-100"
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesDropdown;
