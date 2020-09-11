import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, key, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
    dispatch({
      type: "TOTAL_PRICE",
      item: price,
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(parseFloat(rating))
            .fill()
            .map((_, i) => (
              <span role="img" aria-labelledby="star">
                ✨
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
