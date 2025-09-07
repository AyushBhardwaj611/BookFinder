// openLibrary.js
// Functions to call Open Library API

export async function fetchBooks(query) {
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Failed to fetch books');
  return response.json();
}
