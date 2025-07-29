// src/pages/projects.js
import Head from 'next/head';
import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="container">
      <Head>
        <title>Meus Projetos - Portfólio</title>
        <meta name="description" content="Veja os projetos e trabalhos desenvolvidos por Emerson Silva Ricardo." />
      </Head>

      <main className="main">
        <h1 className="title">Meus Projetos</h1>
        <p className="description" style={{ maxWidth: '800px' }}>
          Esta página será a sua galeria de projetos! Aqui você poderá exibir seus trabalhos mais relevantes, com descrições, tecnologias utilizadas e links para repositórios ou demos.
        </p>
        {/* Você pode adicionar cards de projeto aqui, de forma similar aos cards de ISO */}
        <div className="callToActionGrid"> {/* Reutiliza o grid de cards da home */}
            <div className="actionCard" style={{ height: 'auto' }}>
                <h2>Projeto 1: Nome do Projeto</h2>
                <p>Breve descrição do projeto e tecnologias.</p>
                <a href="#" className="downloadButton" style={{ marginTop: '20px' }}>Ver Detalhes</a>
            </div>
            <div className="actionCard" style={{ height: 'auto' }}>
                <h2>Projeto 2: Nome do Projeto</h2>
                <p>Breve descrição do projeto e tecnologias.</p>
                <a href="#" className="downloadButton" style={{ marginTop: '20px' }}>Ver Detalhes</a>
            </div>
            {/* Adicione mais projetos aqui */}
        </div>
      </main>
    </div>
  );
}