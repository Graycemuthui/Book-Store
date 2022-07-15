import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';
import './Book.css';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function Book(props) {
  const dispatch = useDispatch();
  const deleteBook = () => dispatch(removeBook(props.id));
  return (
    <div className="books-container">
      <h2 className="heading-text">{props.title}</h2>
      <p className="book-author">{props.author}</p>
      <button type="button" className="remove-btn" onClick={deleteBook}>
        Remove
      </button>
    </div>
  );
}

export default Book;
