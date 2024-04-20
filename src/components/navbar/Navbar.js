import React, { memo } from "react";
import { BsPerson, BsCart2, BsSearch } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import navLogo from "../../assets/images/nav__logo.svg";
function Navbar() {
  return (
    <nav>
      <div className="sub__nav">
        <div className="language">
          <h4>
            EN <FiChevronDown />
          </h4>
          <h4>
            USD <FiChevronDown />
          </h4>
        </div>
        <div className="services">
          <div className="ava">
            <BsPerson className="icon" />
            <h2>My profile</h2>
          </div>
          <div className="cart">
            <BsCart2 className="icon" />
            <h2>Items</h2>
          </div>
          <div className="search">
            <h2>$0.00</h2>
            <BsSearch className="icon" />
          </div>
        </div>
      </div>
      <hr />
      <div className="navbar">
        <div className="logo">
          <img src={navLogo} alt="navLogo" />
        </div>
        <ul className="nav__links">
          <li className="nav__item">Home</li>
          <li className="nav__item">Bags</li>
          <li className="nav__item">Sneakers</li>
          <li className="nav__item">Belt</li>
          <li className="nav__item">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(Navbar);
