import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Online Shopping App</h1>
      <nav className="nav-bar">
        <NavLink to="/" className="nav-link" activeClassName="active-link" exact>
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link" activeClassName="active-link">
          Products
        </NavLink>
        <NavLink to="/cart" className="nav-link" activeClassName="active-link">
          Cart
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
