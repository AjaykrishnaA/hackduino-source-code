import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-labelledby="star">
                ✨
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
