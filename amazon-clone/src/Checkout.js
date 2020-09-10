import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
// import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        ></img>
        <div>
          {user ? (
            <h3>Hello {user?.email},</h3>
          ) : (
            // {if(basket.length === 0){
            //   <h4>Go ahead and add some items to your cart</h4>
            // }}

            <h3>
              <Link to="/login">Sign in</Link> to see items in your cart
            </h3>
          )}

          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
