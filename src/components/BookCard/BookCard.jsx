// BookCard.jsx
import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>{book.author_name?.join(', ')}</p>
    <p>{book.first_publish_year}</p>
  </div>
);

export default BookCard;
