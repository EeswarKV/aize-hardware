import React,{ useState, useEffect} from "react";
import logo from "./assets/logo.png";
import "./header.css";
import Hamburger from 'hamburger-react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selector.js';

  //generate header with navigation bar including home and cart tabs along with mobile layout hamburger menu
  function Header({itemCount}) {
  
    //constants helps you to apply styles for mobile layout and controls the open and close layout for hamburger
    const [navOption, setNavOptions] = useState(false);
    const closeMobileMenu = () => setNavOptions(false);
    const [userInfo, setUserInfo] = useState(); // store the default user information

    //fetched user information to show in the header
    const fetchUser = async () => {
      return await fetch(`http://localhost:8080/users/${2}`)
        .then(response => response.json())
        .then(data => {
          setUserInfo(data);
        });}
        useEffect( () => {fetchUser()},[]);
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
            <Link to="/cart">Cart {itemCount > 0 ? '(' + itemCount + ')' : ''}</Link>
          </li>

          <li className="nav-list" onClick={closeMobileMenu}>
            Hello, {userInfo?.name?.firstName + ' '+ userInfo?.name?.lastName}
          </li>
        </ul>
        <Hamburger toggled={navOption} toggle={setNavOptions} />
      </div>
    );
  }

  //retrieve the total items in cart from redux to show in header cart
  const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
  });

  //connect the component to redux state
  export default connect(
    mapStateToProps,
    null
  )(Header);