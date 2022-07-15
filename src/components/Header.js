import React from 'react';
import Nav from './Nav';
import './Header.css';

const Header = () => (
  <header className="headerStyle">
    <div className="headerLeft">
      <h1>Bookstore CMS</h1>
      <Nav />
    </div>
  </header>
);

export default Header;
