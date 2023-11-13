import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import Heading from './Heading';
import './Banner.css';

const Banner = ({ items }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative bg-purple-200 pb-6">
      <Slider {...settings}>
      {items.categories.map((item) => (
        <div key={item.id} className="banner-item w-full relative">
            <Link to={item.products ? `/category/${item.id}` : `/product/${item.id}`}>
            <div className="text-center mb-4">
                <Heading text={item.name} />
            </div>
            <div className="banner-image-container">
                <div className="w-full h-96 bg-cover bg-center hover:opacity-80" style={{ 
                    backgroundImage: `url(${require(`../images/categories/${item.image}`)})`,
                    backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat' 
                }}>
                </div>
                <div className="explore-text">
                Explore {item.name}
                </div>
            </div>
            </Link>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;


