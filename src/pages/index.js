// src/pages/index.js (Nova Página Inicial do Portfólio - Completa)
import Head from 'next/head';
import React from 'react';
import Image from 'next/image'; // Certifique-se de que Image está importado

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Emerson Silva Ricardo - Portfólio</title>
        <meta name="description" content="Portfólio de Emerson Silva Ricardo: Network and Infrastructure Analyst. Explore meus projetos, currículo e recursos de boas práticas." />
      </Head>

      <main className="main">
        {/* Seção de Herói (Banner e Detalhes do Perfil) */}
        <section className="hero-section">
          {/* Imagem de Capa (Banner) */}
          <div className="hero-banner">
            <Image
              src="/imagens/capa.jpg" // <-- CONFIRME: Sua imagem de capa deve estar em public/imagens/capa.jpg
              alt="Capa do Portfólio de Emerson Silva Ricardo"
              layout="fill"
              objectFit="cover" // Garante que a imagem cubra o espaço (pode haver corte)
              quality={90}
              priority
            />
            <div className="hero-overlay"></div>
          </div>

          {/* Card com foto e detalhes */}
          <div className="profile-details-card">
            <div className="profileImageContainer">
              <Image
                src="/imagens/perfil.jpg" // <-- CONFIRME: Sua foto de perfil deve estar em public/imagens/perfil.jpg
                alt="Emerson Silva Ricardo"
                width={160} // Ajustado para o novo tamanho via CSS
                height={160} // Ajustado para o novo tamanho via CSS
                className="profileImage"
              />
            </div>
            {/* O h1 principal da página agora está aqui, dentro do card de destaque */}
            <h1 className="profile-name">Emerson Silva Ricardo</h1>
            <p className="profile-title">Network and Infrastructure Analyst</p>
            <p className="profile-skills">
              Especialista em **Linux**, **Datacom** e **Mikrotik**, com foco em **análise e otimização de infraestrutura de redes**.
            </p>
            <div className="profile-contact-info">
              <p><span>📞</span> 085992933087</p>
              <p><span>✉️</span> silvaemerson797@gmail.com</p>
            </div>
            <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              Ver Perfil no LinkedIn
            </a>
          </div>
        </section>

        {/* --- Seção de Ações Principais --- */}
        <section className="section-container">
          <h2 className="section-title">Explore Meu Trabalho e Conhecimento</h2>
          <div className="callToActionGrid">
            <a href="/projects" className="actionCard">
              <h2>Meus Projetos &rarr;</h2>
              <p>Veja os trabalhos que desenvolvi e as soluções que implementei em redes e infraestrutura.</p>
            </a>
            <a href="/resume" className="actionCard">
              <h2>Meu Currículo &rarr;</h2>
              <p>Conheça minha experiência profissional, formação acadêmica e habilidades técnicas.</p>
            </a>
            <a href="/downloads" className="actionCard">
              <h2>Recursos & Downloads &rarr;</h2>
              <p>Acesse materiais, guias e boas práticas em redes e TI para download.</p>
            </a>
            <a href="/contact" className="actionCard">
              <h2>Fale Comigo &rarr;</h2>
              <p>Entre em contato para oportunidades de trabalho, parcerias ou dúvidas.</p>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}