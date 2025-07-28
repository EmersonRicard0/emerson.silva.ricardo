// src/components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link'; // Importa o componente Link do Next.js para navegação
import '../styles/globals.css'; // Para os estilos do Navbar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar se o menu mobile está aberto

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <Link href="/" className="navbarBrand">
          {/* Você pode substituir 'Repositorio ISOs' por um logo se tiver */}
          Repositório de ISOs
        </Link>

        <div className={`navLinks ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="navItem" onClick={() => setIsOpen(false)}>
            Repositório
          </Link>
          <Link href="/about" className="navItem" onClick={() => setIsOpen(false)}>
            Sobre
          </Link>
          <Link href="/support" className="navItem" onClick={() => setIsOpen(false)}>
            Suporte
          </Link>
        </div>

        {/* Botão Hambúrguer para Mobile */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;