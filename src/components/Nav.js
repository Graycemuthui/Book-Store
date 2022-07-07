import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>Bookstore</h1>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
