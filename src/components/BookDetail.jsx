import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../service/api";
import { FaEdit, FaTrash } from "react-icons/fa";

function BookDetail({ match }) {
  const [book, setBook] = useState({});

  useEffect(() => {
    api.get(`/books/${match.params.id}`).then((response) => {
      setBook(response.data);
    });
  }, []);

  const del = () => {
    if (window.confirm("Certeza que deseja excluir esse item?")) {
      api.delete(`/books/${match.params.id}`).then((response) => {
        alert(response.data.message);
      });
    }
  };
  return (
    <div className="detail">
      <h1>{book.bookName}</h1>

      <div className="options">
        <Link to={`/${match.params.id}/update`}>
          {" "}
          <FaEdit className="ico" size={20} />{" "}
        </Link>
        <a onClick={del}>
          {" "}
          <FaTrash className="ico" size={20} color="red" />{" "}
        </a>
      </div>
      <div className="cardDetail">
        <img src={book.bookCover} style={{ width: 120 }} alt="Capa do livro" />
        <h2>Autor: {book.autorName}</h2>
        <h2>valor: R${book.price}</h2>
        <p>Descrição: {book.description}</p>
      </div>

      <Link to={`/${match.params.id}/purchase`}>
        <button className="purchaseButtonDetail">COMPRAR</button>
      </Link>
    </div>
  );
}

export default BookDetail;
