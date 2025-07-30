// src/pages/contact.js
import Head from 'next/head';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="container">
      <Head>
        <title>Contato - Emerson Silva Ricardo</title>
        <meta name="description" content="Entre em contato com Emerson Silva Ricardo para oportunidades profissionais e colaborações." />
      </Head>

      <main className="main">
        <section className="section-container">
          <h1 className="section-title">Fale Comigo</h1>
          <p className="description" style={{ marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
            Estou sempre aberto a novas oportunidades, desafios e colaborações. Sinta-se à vontade para entrar em contato através das opções abaixo:
          </p>

          <div className="callToActionGrid">
            <a href="mailto:silvaemerson797@gmail.com" className="actionCard" aria-label="Enviar e-mail para Emerson Silva Ricardo">
              <h2>E-mail &rarr;</h2>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>✉️</span> silvaemerson797@gmail.com
              </p>
            </a>

            <a href="tel:+5585992933087" className="actionCard" aria-label="Ligar para Emerson Silva Ricardo">
              <h2>Telefone &rarr;</h2>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>📞</span> +55 85 99293-3087
              </p>
            </a>

            <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="actionCard" aria-label="Abrir perfil no LinkedIn">
              <h2>LinkedIn &rarr;</h2>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>🔗</span> Meu Perfil
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
