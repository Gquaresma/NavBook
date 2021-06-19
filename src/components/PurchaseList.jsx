import React, { useState, useEffect } from "react";
import api from "../service/api";
import { FaTrash } from "react-icons/fa";

function BookList() {
  const [purchaseList, setPurchaseList] = useState([]);

  useEffect(() => {
    api.get("/purchase").then((response) => {
      setPurchaseList(response.data);
    });
  }, []);

  const del = (id) => {
    if (window.confirm("Certeza que deseja excluir esse item?")) {
      api.delete(`/purchase/${id}`).then((response) => {
        alert(response.data.message);
        window.location.reload();
      });
    }
  };

  return (
    <div className="list">
      <h1>Histórico de vendas</h1>
      <h2>Total de vendas: {purchaseList.length}</h2>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do cliente</th>
              <th>Livro comprado</th>
              <th>Quantidade de livros</th>
              <th>Total da compra</th>
              <th>Horário da compra</th>
              <th>Cancelar Compra</th>
            </tr>
          </thead>

          <tbody>
            {purchaseList.map((item, i) => {
              return (
                <tr key={item._id}>
                  <td> {i + 1} </td>
                  <td> {item.clientName} </td>
                  <td> {item.bookName} </td>
                  <td> {item.bookQuantity} </td>
                  <td> {item.bookPrice} </td>
                  <td> {item.purchaseTime} </td>
                  <td onClick={() => del(item._id)}>
                    {" "}
                    <FaTrash className="ico" color="#b44646" />{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList;
