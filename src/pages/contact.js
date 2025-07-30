// src/pages/contact.js (REESTRUTURADO COM CARDS)
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

          {/* NOVO: Usando a estrutura do 'callToActionGrid' com 'actionCard' */}
          <div className="callToActionGrid"> {/* Reutiliza a classe de grid para os cards */}

            {/* Card para E-mail */}
            <a href="mailto:silvaemerson797@gmail.com" className="actionCard">
              <h2>E-mail &rarr;</h2>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>✉️</span> silvaemerson797@gmail.com
              </p>
            </a>

            {/* Card para Telefone/WhatsApp */}
            <a href="tel:+5585992933087" className="actionCard">
              <h2>Telefone &rarr;</h2>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>📞</span> +55 85 99293-3087
              </p>
            </a>

            {/* Card para LinkedIn */}
            <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="actionCard">
              <h2>LinkedIn &rarr;</h2>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <span>🔗</span> Meu Perfil
              </p>
            </a>

            {/* Opcional: Adicionar um card para um futuro formulário de contato, se desejar */}
            {/*
            <div className="actionCard">
              <h2>Enviar Mensagem &rarr;</h2>
              <p>Preencha nosso formulário de contato direto.</p>
              // Aqui poderia ter um botão para um modal ou link para outra página de formulário
            </div>
            */}

          </div>
        </section>
      </main>
    </div>
  );
}