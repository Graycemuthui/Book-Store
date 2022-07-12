import React, { useState } from 'react';
import Book from '../components/Books';
import Forms from '../components/Form';

const Books = () => {
  // eslint-disable-next-line
  const [books] = useState([
    {
      id: 1,
      genre: 'Action',
      title: 'The One',
      author: 'Jimmy Fitzimons',
    },
  ]);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.title} title={book.title} author={book.author} />
      ))}
      <Forms />
    </div>
  );
};

export default Books;
