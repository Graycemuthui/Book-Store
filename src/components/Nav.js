import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="active-link">
          <Link to="/books">BOOKS</Link>
        </li>
        <li className="active-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
