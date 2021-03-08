import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import "./header.css";
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector.js';

function Header({itemCount}) {
  
  //constants helps you to apply styles for mobile layout and controls the opand an close layout for hamburger
  const [navOption, setNavOptions] = useState(false);
  const closeMobileMenu = () => setNavOptions(false);
  const [productsInCart, setProductsInCart] = useState([]);

  //generate header with navigation bar including home and history tabs along with mobile layou hamburger menu
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
            <Link to="/"><img src={logo} className="logo" alt="logo" onClick={closeMobileMenu}/> </Link>
        </div>
      </div>
      <ul className={navOption ? "nav-options active" : "nav-options"}>
      <li className="nav-list" onClick={closeMobileMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="nav-list" onClick={closeMobileMenu}>
          <Link to="/cart">Cart {itemCount}</Link>
        </li>
      </ul>
      <Hamburger toggled={navOption} toggle={setNavOptions} />
    </div>
  );
  }

  const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
  });

  export default connect(
    mapStateToProps,
    null
  )(Header);