// import React, { forwardRef } from "react";
// import "./CheckoutProduct.css";
// import { useStateValue } from "./StateProvider";

// // function CheckoutProduct({ id, title, price, rating, image }) {
// const [{ basket }, dispatch] = useStateValue();

// const removeFromBasket = () => {
//   dispatch({
//     type: "REMOVE_FROM_BASKET",
//     id: id,
//   });
// };
// const CheckoutProduct = forwardRef(
//   ({ id, title, price, rating, image }, ref) => 
//   (
//     <div ref={ref} className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} />
//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="checkoutProduct__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <span role="img" aria-labelledby="star">
//                 ✨
//               </span>
//             ))}
//         </div>
//         <button onClick={removeFromBasket} className="checkoutProduct__button">
//           Remove from Cart
//         </button>
//       </div>
//     </div>
//   )
// );

// // }

// export default CheckoutProduct;
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(parseFloat(rating))
            .fill()
            .map((_, i) => (
              <span role="img" aria-labelledby="star">
                ✨
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
