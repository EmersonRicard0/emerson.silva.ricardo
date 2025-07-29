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
        <div className="hero">
          <div className="profileImageContainer">
            {/* Certifique-se de que sua foto de perfil está em public/images/ */}
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQHS2e0ZBJRh4w/profile-displayphoto-shrink_800_800/B4DZbfQx0dGwAc-/0/1747502441136?e=1756944000&v=beta&t=KVodmXtQLU2BICdHVyYVql3HSp2CYqFwxL-ZPUFExaghttps://media.licdn.com/dms/image/v2/D4D03AQHS2e0ZBJRh4w/profile-displayphoto-shrink_800_800/B4DZbfQx0dGwAc-/0/1747502441136?e=1756944000&v=beta&t=KVodmXtQLU2BICdHVyYVql3HSp2CYqFwxL-ZPUFExag"
              alt="Emerson Silva Ricardo"
              width={150}
              height={150}
              className="profileImage"
            />
          </div>
          <h1 className="heroTitle">Olá, eu sou o Emerson Silva Ricardo.</h1>
          <p className="heroSubtitle">
            Analista de Redes e Infraestrutura, apaixonado por Linux, Datacom e soluções de monitoramento. Explore meus projetos e recursos de boas práticas aqui.
          </p>
        </div>

        <div className="callToActionGrid">
          <a href="/projects" className="actionCard">
            <h2>Meus Projetos &rarr;</h2>
            <p>Veja os trabalhos que desenvolvi e as soluções que implementei.</p>
          </a>
          <a href="/downloads" className="actionCard">
            <h2>Recursos & Downloads &rarr;</h2>
            <p>Acesse materiais sobre boas práticas e conhecimento em redes.</p>
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
      </main>
    </div>
  );
}