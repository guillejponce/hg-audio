import React from 'react';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard; 