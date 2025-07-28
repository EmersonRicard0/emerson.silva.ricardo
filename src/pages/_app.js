// src/pages/_app.js
import '../styles/globals.css'; // Importa os estilos globais
import React from 'react';
import Navbar from '../components/Navbar'; // Importa o componente Navbar

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* O Navbar será renderizado em todas as páginas */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;