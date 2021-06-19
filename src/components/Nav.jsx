import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>NavBook</h1>
      </Link>

      <ul className="navLink">
        <Link to="/register">
          <li>Cadastro Livro</li>
        </Link>

        <Link to="/purchaseList">
          <li>Vendas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
