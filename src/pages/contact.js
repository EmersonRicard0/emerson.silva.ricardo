// src/pages/contact.js (Aprimorado)
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
          <p className="description" style={{ marginBottom: '50px' }}>
            Estou sempre aberto a novas oportunidades, desafios e colaborações. Sinta-se à vontade para entrar em contato!
          </p>

          {/* NOVO: Usando a classe 'resumeSection' para criar um card de contato */}
          <div className="resumeSection contactCard">
            <h2>Informações de Contato</h2> {/* Título para o card */}

            <div className="contactInfoGrid"> {/* NOVO: Grid para organizar os itens de contato */}
              <div className="contactItem">
                <span className="contactIcon">✉️</span> {/* Ícone */}
                <a href="mailto:silvaemerson797@gmail.com" className="contactLink">silvaemerson797@gmail.com</a>
              </div>

              <div className="contactItem">
                <span className="contactIcon">📞</span> {/* Ícone */}
                <a href="tel:+5585992933087" className="contactLink">+55 85 99293-3087</a> {/* Adicionado +55 e formatado */}
              </div>

              <div className="contactItem">
                <span className="contactIcon">🔗</span> {/* Ícone */}
                <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="contactLink">Meu Perfil no LinkedIn</a>
              </div>
            </div>

            {/* Futuramente, você pode adicionar um formulário de contato aqui */}
            {/* Exemplo: */}
            {/*
            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px dashed var(--border-subtle)' }}>
              <h3>Envie-me uma mensagem</h3>
              <form className="contactForm">
                <input type="text" placeholder="Seu Nome" required />
                <input type="email" placeholder="Seu E-mail" required />
                <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
                <button type="submit" className="linkedin-button">Enviar Mensagem</button>
              </form>
            </div>
            */}
          </div>
        </section>
      </main>
    </div>
  );
}