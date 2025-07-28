// src/pages/index.js
import Head from 'next/head';
import IsoCard from '../components/IsoCard.js';   // Corrigido para .js
import { getIsosData } from '../utils/dataFetcher.js'; // Corrigido para .js
// REMOVIDA: importação de '../styles/globals.css' daqui, pois já está em _app.js

export async function getStaticProps() {
  const isos = await getIsosData();
  return {
    props: {
      isos,
    },
    revalidate: 60 // Revalida a cada 60 segundos para pegar atualizações no JSON
  };
}

export default function HomePage({ isos }) {
  return (
    <div className="container">
      <Head>
        <title>Repositório de ISOs macOS</title>
        <meta name="description" content="Baixe ISOs de sistemas macOS para suas necessidades de instalação e testes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Repositório de ISOs macOS
        </h1>

        <p className="description">
          Encontre e baixe diversas versões do macOS.
        </p>

        <div className="grid">
          {isos.map((iso) => (
            <IsoCard key={iso.id} iso={iso} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}