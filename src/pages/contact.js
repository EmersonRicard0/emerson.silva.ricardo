// src/pages/contact.js (Completo - Placeholder)
import Head from 'next/head';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="container">
      <Head>
        <title>Contato - Emerson Silva Ricardo</title>
        <meta name="description" content="Entre em contato com Emerson Silva Ricardo para oportunidades profissionais." />
      </Head>

      <main className="main">
        <section className="section-container">
          <h1 className="section-title">Fale Comigo</h1>
          <p className="description">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!
          </p>
          <div className="profile-contact-info" style={{ marginTop: '40px', fontSize: '1.2rem', flexDirection: 'column', gap: '20px' }}>
            <p><span>✉️</span> silvaemerson797@gmail.com</p>
            <p><span>📞</span> 085992933087</p>
            <p><span>🔗</span> <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="contactLink">Meu Perfil no LinkedIn</a></p>
          </div>
          {/* Você pode adicionar um formulário de contato aqui futuramente */}
        </section>
      </main>
    </div>
  );
}