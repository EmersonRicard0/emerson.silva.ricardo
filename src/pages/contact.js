// src/pages/contact.js
import Head from 'next/head';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="container">
      <Head>
        <title>Contato - Portfólio</title>
        <meta name="description" content="Entre em contato com Emerson Silva Ricardo." />
      </Head>

      <main className="main">
        <h1 className="title">Fale Comigo</h1>
        <p className="description" style={{ maxWidth: '800px' }}>
          Estou sempre aberto a novas oportunidades de trabalho, colaborações e discussões sobre tecnologia em redes.
        </p>
        <div className="resumeSection" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2>Entre em Contato</h2>
          <p>
            Email: <a href="mailto:silvaemerson797@gmail.com" className="contactLink">silvaemerson797@gmail.com</a>
          </p>
          <p>
            Celular: 085992933087
          </p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="contactLink">Meu Perfil no LinkedIn</a>
          </p>
          {/* Você pode adicionar um formulário de contato aqui futuramente */}
        </div>
      </main>
    </div>
  );
}