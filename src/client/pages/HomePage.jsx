import React, { useState } from 'react';
import data from '../data/data.json';
import Banner from '../components/Banner';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard'; 
import Heading from '../components/Heading';

const HomePage = () => {
  const [bannerItems, setBannerItems] = useState(data);
  // The first four categories are the recommended ones
  const recommendedCategories = data.categories.slice(0, 4);

  // The first product of each recommended category is the recommended product
  const recommendedProducts = recommendedCategories.map(category => category.products[0]);

  return (
    <div>
      <Banner items={bannerItems} />
      <div className="container mx-auto px-4">
        <Heading text="Recommended Categories" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <Heading text="Recommended Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

