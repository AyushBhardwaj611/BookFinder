// useBooks.js
import { useState } from 'react';
import { fetchBooks } from '../api/openLibrary';

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBooks(query);
      setBooks(data.docs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, searchBooks };
};

export default useBooks;
