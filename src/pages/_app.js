// src/pages/_app.js
import '../styles/globals.css'; // Mantenha esta linha para importar os estilos globais
import React from 'react'; // Garante que React esteja disponível

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;