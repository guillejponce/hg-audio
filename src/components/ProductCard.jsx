import React from 'react';

const ProductCard = ({ title, price, image, description }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard; 