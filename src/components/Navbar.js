// src/components/Navbar.js (Completo)
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Para destacar o link ativo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Hook para acessar a rota atual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fecha o menu ao mudar de rota (para mobile)
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  const navLinks = [
    { name: 'Projetos', path: '/projects' },
    { name: 'Currículo', path: '/resume' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <Link href="/" legacyBehavior>
          <a className="navbarBrand">Emerson Ricardo</a>
        </Link>

        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`navLinks ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link href={link.path} key={link.name} legacyBehavior>
              {/* Adiciona classe 'active' se a rota atual for igual ao path do link */}
              <a className={`navItem ${router.pathname === link.path ? 'active' : ''}`}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}