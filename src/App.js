import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Books from './pages/BookPage';
import Categories from './pages/Categories';
import Nav from './components/Nav';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
