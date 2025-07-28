// src/pages/support.js
import Head from 'next/head';
import React from 'react';

export default function SupportPage() {
  return (
    <div className="container">
      <Head>
        <title>Suporte - Repositório de ISOs</title>
        <meta name="description" content="Obtenha ajuda e suporte para o Repositório de ISOs macOS." />
      </Head>

      <main className="main">
        <h1 className="title">Suporte e Ajuda</h1>
        <p className="description" style={{ maxWidth: '800px' }}>
          Para dúvidas frequentes, problemas com downloads ou sugestões, por favor, verifique as informações abaixo.
        </p>
        <div className="cardBody" style={{ textAlign: 'left', maxWidth: '800px', width: '100%', padding: '20px', backgroundColor: 'var(--card-background)', borderRadius: 'var(--border-radius-lg)', boxShadow: '0 4px 10px var(--shadow-color-medium)', border: '1px solid var(--border-color)' }}>
          <h3>Perguntas Frequentes (FAQ)</h3>
          <ul>
            <li>**Os downloads são gratuitos?** Sim, todos os downloads são gratuitos.</li>
            <li>**Os arquivos são verificados?** Sim, tentamos fornecer checksums (SHA256) para a maioria dos arquivos para que você possa verificar a integridade.</li>
            <li>**Como faço para instalar o macOS a partir de uma ISO?** Consulte a documentação oficial da Apple ou guias especializados para obter instruções detalhadas.</li>
          </ul>
          <h3>Contato</h3>
          <p>Se precisar de suporte adicional, entre em contato conosco através do email: <a href="mailto:contato@seusite.com" style={{ color: 'var(--apple-blue)', textDecoration: 'underline' }}>contato@seusite.com</a></p>
        </div>
      </main>
    </div>
  );
}