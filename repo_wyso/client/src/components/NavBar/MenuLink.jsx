import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const MenuLink = ({ to, text }) => {
  return (
    <Link to={to} className="menu__link">{text}</Link>
  );
}

export default MenuLink;