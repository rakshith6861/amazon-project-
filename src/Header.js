import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 4 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLinkOne">Hello {user?.email}</span>
            <span className="header__optionLinkTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLinkOne">Returns</span>
            <span className="header__optionLinkTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLinkOne">Your</span>
            <span className="header__optionLinkTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link */}
        <Link to="/checkout" className="header__link">
           <div className="header__basketCount">
            <ShoppingBasketIcon />
         {  <span className="header__optionLinkTwo header__basketCount">
              {basket?.length}
            </span> }
            </div>  
        </Link>
      </div>
    </nav>
  );
}

export default Header;
