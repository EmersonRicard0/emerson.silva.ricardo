// src/pages/index.js (Nova Página Inicial do Portfólio)
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Emerson Silva Ricardo - Portfólio</title>
        <meta name="description" content="Portfólio de Emerson Silva Ricardo: Network and Infrastructure Analyst." />
      </Head>

      <main className="main">
        <div className="hero-section"> {/* Nova seção para a capa e informações */}
          {/* Imagem de Capa (Banner) */}
          <div className="hero-banner">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D16AQEI6-GLx7ttDw/profile-displaybackgroundimage-shrink_350_1400/B4DZgjWRg7GsAY-/0/1752939698840?e=1756944000&v=beta&t=9zE6nIvgLwcaBYq4m9XH0tujvRnHZY0BZ3120YcSfHI" // <-- Coloque o nome da sua imagem de capa aqui
              alt="Capa do Portfólio de Emerson Silva Ricardo"
              layout="fill" // Para cobrir o container
              objectFit="cover" // Garante que a imagem cubra o espaço sem distorcer
              quality={90} // Qualidade da imagem
              priority // Carrega esta imagem mais rapidamente, pois é a principal
            />
            <div className="hero-overlay"></div> {/* Overlay para escurecer a imagem e melhorar legibilidade do texto */}
          </div>

          <div className="profile-details-card"> {/* Card com foto e detalhes */}
            <div className="profileImageContainer">
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQHS2e0ZBJRh4w/profile-displayphoto-shrink_800_800/B4DZbfQx0dGwAc-/0/1747502441136?e=1756944000&v=beta&t=KVodmXtQLU2BICdHVyYVql3HSp2CYqFwxL-ZPUFExag" // <-- Sua foto de perfil (perfil.jpg ou perfil.png)
                alt="Emerson Silva Ricardo"
                width={150}
                height={150}
                className="profileImage"
              />
            </div>
            <h1 className="profile-name">Emerson Silva Ricardo</h1>
            <p className="profile-title">Network and Infrastructure Analyst</p>
            <p className="profile-skills">Linux | Datacom | Mikrotik | Zabbix</p> {/* Suas principais habilidades */}
            <div className="profile-contact-info">
              <p><span>📞</span> 085992933087</p>
              <p><span>✉️</span> silvaemerson797@gmail.com</p>
            </div>
            <a href="https://www.linkedin.com/in/emerson-silva-ricardo-543308119" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              Ver Perfil no LinkedIn
            </a>
          </div>
        </div>

        {/* Seção dos Cards de Ação */}
        <section className="section-container">
          <h2 className="section-title">Explore Meu Portfólio</h2>
          <div className="callToActionGrid">
            <a href="/projects" className="actionCard">
              <h2>Meus Projetos &rarr;</h2>
              <p>Veja os trabalhos que desenvolvi e as soluções que implementei.</p>
            </a>
            <a href="/resume" className="actionCard">
              <h2>Meu Currículo &rarr;</h2>
              <p>Conheça minha experiência profissional e formação acadêmica.</p>
            </a>
            <a href="/contact" className="actionCard">
              <h2>Fale Comigo &rarr;</h2>
              <p>Entre em contato para oportunidades de trabalho ou parcerias.</p>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}