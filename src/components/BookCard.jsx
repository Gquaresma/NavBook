import React from "react";

function BookCard(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.img} alt="capa do livro" />
      </div>

      <div>
        <h2>{props.name}</h2>
        <h3>Valor: R${props.price}</h3>
      </div>
    </div>
  );
}

export default BookCard;
