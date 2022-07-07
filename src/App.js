import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import DisplayBooks from './components/Books';
import AddBook from './components/AddBook';
import Categories from './components/Categories';
import Nav from './components/Nav';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function App() {
  const books = [
    {
      id: 1,
      genre: 'Action',
      title: 'The One',
      author: 'Jimmy Fitzimons',
    },
  ];

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/books"
            element={(
              <DisplayBooks
                genre={books[0].genre}
                title={books[0].title}
                author={books[0].author}
              />
            )}
          />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
      <AddBook />
    </div>
  );
}

export default App;
