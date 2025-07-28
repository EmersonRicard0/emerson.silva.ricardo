// src/pages/about.js
import Head from 'next/head';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container">
      <Head>
        <title>Sobre - Repositório de ISOs</title>
        <meta name="description" content="Saiba mais sobre o Repositório de ISOs macOS." />
      </Head>

      <main className="main">
        <h1 className="title">Sobre Nós</h1>
        <p className="description" style={{ maxWidth: '800px' }}>
          Este repositório foi criado com o objetivo de facilitar o acesso a imagens ISO de sistemas operacionais macOS para propósitos de desenvolvimento, teste e reinstalação. Nossa missão é oferecer uma plataforma confiável e fácil de usar para a comunidade.
        </p>
        <p className="description" style={{ maxWidth: '800px' }}>
          **Disclaimer:** As imagens são disponibilizadas para fins de conveniência e o usuário é responsável por garantir que possui as licenças adequadas da Apple para o uso do software.
        </p>
        {/* Você pode adicionar mais conteúdo aqui */}
      </main>
    </div>
  );
}