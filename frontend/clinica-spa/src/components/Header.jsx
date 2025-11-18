import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling the header

function Header() {
  return (
    <header>
      <h1>Clínica Saúde e Bem-Estar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/schedule">Agendamento</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;