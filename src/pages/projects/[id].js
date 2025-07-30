// src/pages/projects/[id].js (Correção: Importar Link)
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // <--- ESTA LINHA FOI ADICIONADA!
import path from 'path';
import fs from 'fs/promises';

export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), 'public', 'data');
  let filenames = [];
  try {
    filenames = await fs.readdir(projectsDirectory);
  } catch (error) {
    console.error("Erro ao ler diretório de projetos:", error);
    return { paths: [], fallback: false };
  }
  

  const paths = filenames
    .filter(filename => filename.endsWith('.json') && filename !== 'Untitled-1')
    .map((filename) => ({
      params: { id: filename.replace('.json', '') },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'public', 'data', `${id}.json`);
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const project = JSON.parse(fileContents);
    return {
      props: {
        project,
      },
      revalidate: 60
    };
  } catch (error) {
    console.error(`Erro ao carregar o projeto ${id}:`, error);
    return {
      notFound: true,
    };
  }
}

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div className="container">
        <main className="main">
          <h1 className="title">Projeto Não Encontrado</h1>
          <p className="description">Houve um problema ao carregar os detalhes do projeto.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>{project.title} - Emerson Silva Ricardo</title>
        <meta name="description" content={project.introduction.substring(0, 150) + '...'} />
      </Head>

      <main className="main">
        <section className="section-container project-detail-section">
          {project.mainImage && (
            <div className="project-main-image-container">
              <Image
                src={project.mainImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </div>
          )}
          
          <h1 className="section-title project-title-detail">{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>

          <div className="project-meta">
            <span>Categoria: {project.category}</span>
            <span>Tecnologias: {project.technologies.join(', ')}</span>
          </div>

          <div className="project-content">
            {project.introduction && <p>{project.introduction}</p>}

            {project.sections.map((section, index) => (
              <div key={index} className="project-section-block">
                {section.type === "heading" && <h3>{section.content}</h3>}
                {section.type === "paragraph" && <p>{section.content}</p>}
                {section.type === "list" && (
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }}></li>
                    ))}
                  </ul>
                )}
                {section.type === "image" && (
                  <div className="project-image-wrapper">
                    <Image
                      src={section.src}
                      alt={section.alt}
                      width={800}
                      height={450}
                      objectFit="contain"
                      quality={80}
                      className="project-image-content"
                    />
                    {section.caption && <p className="image-caption">{section.caption}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <Link href="/projects" legacyBehavior>
            <a className="linkedin-button" style={{ marginTop: '50px' }}>&larr; Voltar aos Projetos</a>
          </Link>
        </section>
      </main>
    </div>
  );
}