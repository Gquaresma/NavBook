import React, { useState, useEffect } from "react";
import api from "../service/api";

function BookList({ match }) {
  const [book, setBook] = useState({});

  useEffect(() => {
    api.get(`/books/${match.params.id}`).then((response) => {
      setBook(response.data);
    });
  }, []);

  function onSubmit(e) {
    e.preventDefault();

    let amount = e.target.bookQuantity.value;
    let total = amount * e.target.bookPrice.value;

    let sold = {
      clientName: e.target.clientName.value,
      bookName: e.target.bookName.value,
      bookPrice: total.toFixed(2),
      bookQuantity: amount,
    };

    if (
      window.confirm(
        `Sua compra terá um total de R$${total} \n Deseja comprar?`
      )
    ) {
      api.post("/purchase", sold).then(
        (response) => {
          console.log(response.data);
          alert("Compra Efetuada");
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  return (
    <div className="purchase">
      <h1>Comprar {book.bookName}</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="clientName">Seu nome: *</label>
        <input type="type" id="clientName" name="clientName" required />
        <input
          style={{ display: "none" }}
          type="type"
          id="bookName"
          name="bookName"
          defaultValue={book.bookName}
          disabled
        />

        <input
          style={{ display: "none" }}
          type="number"
          id="bookPrice"
          name="bookPrice"
          step="0.01"
          defaultValue={book.price}
          min={book.price}
        />
        
        <label htmlFor="bookQuantity">Quantidade de Livros</label>
        <input
          type="number"
          id="bookQuantity"
          name="bookQuantity"
          defaultValue="1"
          min="1"
          max={book.quantity}
        />

        <button className="purchaseButton">COMPRAR</button>
      </form>
    </div>
  );
}

export default BookList;
