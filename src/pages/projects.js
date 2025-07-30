// src/pages/projects.js (Completo - Placeholder)
import Head from 'next/head';
import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="container">
      <Head>
        <title>Meus Projetos - Emerson Silva Ricardo</title>
        <meta name="description" content="Projetos desenvolvidos por Emerson Silva Ricardo em redes e infraestrutura." />
      </Head>

      <main className="main">
        <section className="section-container">
          <h1 className="section-title">Meus Projetos</h1>
          <p className="description">
            Esta seção está em construção! Em breve, você encontrará exemplos detalhados dos meus trabalhos e soluções implementadas.
          </p>
          {/* Futuramente, você adicionará aqui seus cards de projeto */}
          {/* Exemplo de estrutura futura para um projeto: */}
          {/*
          <div className="grid">
            <div className="actionCard"> // Reutilizando actionCard, ou criar um .projectCard
              <h2>Nome do Projeto 1</h2>
              <p>Breve descrição do projeto e tecnologias usadas.</p>
              <a href="/projects/projeto-1" className="linkedin-button" style={{ marginTop: '15px', display: 'inline-block' }}>Ver Detalhes</a>
            </div>
            // ... mais projetos
          </div>
          */}
        </section>
      </main>
    </div>
  );
}