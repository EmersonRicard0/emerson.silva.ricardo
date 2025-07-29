// src/pages/index.js (Nova Página Inicial do Portfólio)
import Head from 'next/head';
import React from 'react';
// Se quiser, pode adicionar sua foto de perfil aqui e mais texto de introdução
// import Image from 'next/image'; // Para otimizar imagens, se for usar

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Emerson Silva Ricardo - Portfólio</title>
        <meta name="description" content="Portfólio de Emerson Silva Ricardo: Network and Infrastructure Analyst." />
      </Head>

      <main className="main">
        {/* Se quiser uma foto de perfil */}
        {/* <div className="profileImageContainer">
            <Image
              src="/images/your_profile_photo.jpg" // Coloque sua foto em public/images/
              alt="Emerson Silva Ricardo"
              width={150}
              height={150}
              className="profileImage"
            />
        </div> */}

        <h1 className="title">Olá, eu sou o Emerson Silva Ricardo.</h1>
        <p className="description">
          Analista de Redes e Infraestrutura, apaixonado por Linux, Datacom e soluções de monitoramento. Explore meus projetos e recursos de boas práticas aqui.
        </p>

        <div className="callToActionGrid">
          <a href="/projects" className="actionCard">
            <h2>Meus Projetos &rarr;</h2>
            <p>Veja os trabalhos que desenvolvi e as soluções que implementei.</p>
          </a>
          <a href="/downloads" className="actionCard">
            <h2>Recursos & Downloads &rarr;</h2>
            <p>Acesse materiais sobre boas práticas e conhecimento em redes.</p>
          </a>
          <a href="/resume" className="actionCard">
            <h2>Meu Currículo &rarr;</h2>
            <p>Conheça minha experiência profissional e formação acadêmica.</p>
          </a>
        </div>
      </main>
    </div>
  );
}