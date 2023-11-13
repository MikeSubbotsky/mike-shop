import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Banner.css'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute z-10 left-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="custom-arrow" />
      </div>
    );
};

export default PrevArrow;
