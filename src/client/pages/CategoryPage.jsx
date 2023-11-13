import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard'; 
import data from '../data/data.json'; 
import Heading from '../components/Heading';

const CategoryPage = () => {
  let { categoryId } = useParams();
  categoryId = parseInt(categoryId, 10); 

  const category = data.categories.find(c => c.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Heading text={category.name}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {category.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
