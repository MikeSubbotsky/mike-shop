import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Banner.css'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute z-10 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowRight} className="custom-arrow" />
      </div>
    );
};

export default NextArrow;
