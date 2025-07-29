// src/components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <Link href="/" className="navbarBrand">
          {/* Você pode colocar seu nome aqui ou um logo textual */}
          Emerson Ricardo
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navLinks ${isOpen ? 'open' : ''}`}>
          <Link href="/" className="navItem" onClick={() => setIsOpen(false)}>
            Início
          </Link>
          <Link href="/projects" className="navItem" onClick={() => setIsOpen(false)}>
            Projetos
          </Link>
          <Link href="/resume" className="navItem" onClick={() => setIsOpen(false)}>
            Currículo
          </Link>
          <Link href="/downloads" className="navItem" onClick={() => setIsOpen(false)}>
            Recursos
          </Link>
          <Link href="/contact" className="navItem" onClick={() => setIsOpen(false)}>
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;