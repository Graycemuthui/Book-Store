import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav-bar">
      <h1 className="heading">SAWASAWA BOOKSTORE</h1>
      <ul className="nav-list">
        <li className="active-link">
          <Link to="/books">Books</Link>
        </li>
        <li className="active-link">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
