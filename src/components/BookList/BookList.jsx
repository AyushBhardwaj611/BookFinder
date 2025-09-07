// BookList.jsx
import React from 'react';
import './BookList.css';

const BookList = ({ books }) => {
  if (!books || books.length === 0) return <p className="no-results">No books found.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-card" key={book.key}>
          <h2 className="book-title">{book.title}</h2>
          {book.author_name && (
            <p className="book-author">By: {book.author_name.join(", ")}</p>
          )}
          {book.first_publish_year && (
            <p className="book-year">First Published: {book.first_publish_year}</p>
          )}
          {book.edition_count && (
            <p className="book-editions">Editions: {book.edition_count}</p>
          )}
          <a
            href={`https://openlibrary.org${book.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="book-link"
          >
            View Book
          </a>
        </div>
      ))}
    </div>
  );
};

export default BookList;
