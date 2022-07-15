import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Forms from '../components/Form';
import { fetchBooks } from '../redux/books/Books';
import './Bookpage.css';

const Books = () => {
  // eslint-disable-next-line
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      {Object.keys(books).map((bookId) => (
        <Book
          key={bookId}
          category={books[bookId][0].category}
          title={books[bookId][0].title}
          author={books[bookId][0].author}
          id={bookId}
        />
      ))}
      <Forms />
    </div>
  );
};

export default Books;
