import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_amazonLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link
          to={!user && "/login"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
            Hello {user ? user.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <Link to="/checkout" style={{ color: "white" }}>
            <ShoppingBasketIcon />
          </Link>
          <span className="header_optionLineTwo header_BasketCount">
            $ {getBasketTotal(basket)}
            {/* {basket.length} */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
