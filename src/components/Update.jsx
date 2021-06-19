import React, { useState, useEffect } from "react";
import api from "../service/api";

function Update({ match }) {
  const [books, setBooks] = useState({});

  useEffect(() => {
    api.get(`/books/${match.params.id}`).then((response) => {
      setBooks(response.data);
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      bookName: e.target.bookName.value,
      description: e.target.description.value,
      autorName: e.target.autorName.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    };

    api.put(`/books/${match.params.id}`, data).then(
      (response) => {
        console.log(response.data);
        alert("Atualizado");
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div className="update">
      <h1>Atualização de Livro</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="bookName"> Nome do Livro:</label>
        <input
          defaultValue={books.bookName}
          type="text"
          id="bookName"
          name="bookName"
        />

        <label htmlFor="description">Sinopse do livro: </label>
        <input
          defaultValue={books.description}
          type="text"
          id="description"
          name="description"
        />

        <label htmlFor="autorName">Nome do autor: </label>
        <input
          defaultValue={books.autorName}
          type="text"
          id="autorName"
          name="autorName"
        />

        <label htmlFor="price">Preço: </label>
        <input
          defaultValue={books.price}
          type="number"
          id="price"
          name="price"
          min="0"
          step="0.01"
        />

        <label htmlFor="quantity">Quantidade em estoque: </label>
        <input
          defaultValue={books.quantity}
          type="number"
          id="quantity"
          name="quantity"
          min="0"
        />

        <button className="updateButton">Atualizar</button>
      </form>
    </div>
  );
}

export default Update;
