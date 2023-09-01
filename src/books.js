import React, { useState } from "react";
import axios from "axios";
import "./index.css";
function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBooks();
  };

  const searchBooks = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book cover" />
            <h3>{book.volumeInfo.title}</h3>
            <button className="bagbt">Bag</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
