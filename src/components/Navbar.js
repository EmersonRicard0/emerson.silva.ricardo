// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    const handleEsc = (e) => { if (e.key === 'Escape') setIsOpen(false); };

    router.events.on('routeChangeComplete', handleRouteChange);
    window.addEventListener('keydown', handleEsc);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('keydown', handleEsc);
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

        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menu de navegação">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`navLinks ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link href={link.path} key={link.name} legacyBehavior>
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
