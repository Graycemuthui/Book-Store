import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import './Header.css';

const Header = () => (
  <header className="headerStyle">
    <div className="headerLeft">
      <h1>Bookstore CMS</h1>
      <Nav />
    </div>
    <div className="Oval">
      <FontAwesomeIcon icon={faUser} />
    </div>
  </header>
);

export default Header;
