// src/pages/downloads.js (Completo - Antigo index.js)
import Head from 'next/head';
import React from 'react';
import { getIsosData } from '../utils/dataFetcher'; // Importa a função para buscar dados das ISOs

export async function getStaticProps() {
  const isos = await getIsosData();
  return {
    props: {
      isos,
    },
    revalidate: 60 // Revalida a cada 60 segundos
  };
}

export default function DownloadsPage({ isos }) {
  return (
    <div className="container">
      <Head>
        <title>Recursos & Downloads - Emerson Silva Ricardo</title>
        <meta name="description" content="Recursos e downloads de boas práticas em redes e TI." />
      </Head>

      <main className="main">
        <section className="section-container">
          <h1 className="section-title">Recursos e Boas Práticas</h1>
          <p className="description">
            Aqui você encontra materiais e arquivos úteis sobre redes, infraestrutura e boas práticas.
          </p>

          {isos && isos.length > 0 ? (
            <div className="grid">
              {isos.map((iso, index) => (
                <a href={iso.link} target="_blank" rel="noopener noreferrer" className="actionCard" key={index}>
                  <h2>{iso.name}</h2>
                  <p>{iso.description}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="description" style={{ marginTop: '30px' }}>
              Nenhum recurso disponível no momento. Em breve teremos mais conteúdo!
            </p>
          )}
        </section>
      </main>
    </div>
  );
}