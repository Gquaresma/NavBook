import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../service/api";
import BookCard from "./BookCard";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div className="home">
      <h1>Livros Disponíveis</h1>

      <div className="books">
        {books.map((book) => {
          return (
            <Link key={book._id} to={`/${book._id}`}>
              {" "}
              <BookCard
                img={book.bookCover}
                name={book.bookName}
                price={book.price}
              />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
