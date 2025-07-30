// src/pages/projects.js (Atualizado com o novo projeto)
import Head from 'next/head';
import React from 'react';
import Image from 'next/image'; // Importar o componente Image

export default function ProjectsPage() {
  return (
    <div className="container">
      <Head>
        <title>Meus Projetos - Emerson Silva Ricardo</title>
        <meta name="description" content="Projetos desenvolvidos por Emerson Silva Ricardo em redes e infraestrutura, monitoramento e automação." />
      </Head>

      <main className="main">
        <section className="section-container">
          <h1 className="section-title">Meus Projetos</h1>
          <p className="description" style={{ marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
            Aqui estão alguns dos projetos que desenvolvi e implementei, demonstrando minhas habilidades em diversas áreas de redes e infraestrutura.
          </p>

          <div className="callToActionGrid"> {/* Reutilizamos o grid de cards */}

            {/* NOVO CARD: Projeto Zabbix e Grafana */}
            <a href="/projects/zabbix-grafana" className="actionCard">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
                <Image src="/imagens/logos/zabbix-logo.png" alt="Zabbix Logo" width={60} height={60} />
                <Image src="/imagens/logos/grafana-logo.png" alt="Grafana Logo" width={60} height={60} />
              </div>
              <h2>Monitoramento de Rede &rarr;</h2>
              <p>Implementação de soluções robustas com Zabbix e Grafana para visibilidade completa da infraestrutura.</p>
            </a>

            {/* Exemplo de card para um futuro projeto */}
            <a href="/projects/futuro-projeto-1" className="actionCard">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
                {/* <Image src="/imagens/logos/linux-logo.png" alt="Linux Logo" width={60} height={60} /> */}
                <span>⚙️</span> {/* Placeholder para outras logos/ícones */}
              </div>
              <h2>Automação de Infraestrutura &rarr;</h2>
              <p>Detalhes sobre projetos de automação de tarefas e gestão de servidores Linux.</p>
            </a>

            {/* Exemplo de card para um futuro projeto */}
            <a href="/projects/futuro-projeto-2" className="actionCard">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
                {/* <Image src="/imagens/logos/datacom-logo.png" alt="Datacom Logo" width={60} height={60} /> */}
                <span>📡</span> {/* Placeholder para outras logos/ícones */}
              </div>
              <h2>Otimização de Redes Datacom &rarr;</h2>
              <p>Casos de sucesso em otimização e configuração de equipamentos Datacom.</p>
            </a>

            {/* Você pode continuar adicionando mais cards de projeto aqui */}

          </div>
        </section>
      </main>
    </div>
  );
}