// Home.jsx
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookList from '../../components/BookList/BookList';
import useBooks from '../../hooks/useBooks';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const { books, loading, error, searchBooks } = useBooks();

  const handleSearch = () => {
    searchBooks(query);
  };

  return (
    <div className="home">
      <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <BookList books={books} />
    </div>
  );
};

export default Home;
