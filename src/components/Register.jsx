import React, { useState } from "react";
import api from "../service/api";
import { firebaseConfig } from "../config/firebase";

function Register() {
  const [imgUrl, setImgUrl] = useState(null);

  const onFileChange = async (e) => {
    const imgFile = e.target.files[0];
    const storageRef = firebaseConfig.storage().ref();
    const imgRef = storageRef.child(imgFile.name);

    await imgRef.put(imgFile);

    setImgUrl(await imgRef.getDownloadURL());
  };

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      bookCover: imgUrl,
      bookName: e.target.bookName.value,
      description: e.target.description.value,
      autorName: e.target.autorName.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
    };

    api.post("/books", data).then(
      (response) => {
        console.log(response.data);
        alert("Livro Cadastrado")
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div className="register">
      <h1>Cadastro de Livro</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="bookCover">Capa do livro: </label>
        <input type="file" id="bookCover" onChange={onFileChange} />

        <label htmlFor="bookName"> Nome do Livro:</label>
        <input type="text" id="bookName" name="bookName" />

        <label htmlFor="description">Sinopse do livro: </label>
        <input type="text" id="description" name="description" />

        <label htmlFor="autorName">Nome do autor: </label>
        <input type="text" id="autorName" name="autorName" />

        <label htmlFor="price">Preço: </label>
        <input type="number" id="price" name="price" min="0" step="0.01" />

        <label htmlFor="quantity">Quantidade em estoque: </label>
        <input type="number" id="quantity" name="quantity" min="0" />

        <button className="registerButton">Cadastrar</button>
      </form>
    </div>
  );
}

export default Register;
