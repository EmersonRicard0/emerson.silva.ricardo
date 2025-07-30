// src/pages/resume.js (Completo)
import Head from 'next/head';
import React from 'react';
import { getResumeData } from '../utils/dataFetcher';

export async function getStaticProps() {
  const resume = await getResumeData();
  return {
    props: {
      resume,
    },
    revalidate: 60 // Revalida a cada 60 segundos
  };
}

export default function ResumePage({ resume }) {
  if (!resume) {
    return (
      <div className="container">
        <main className="main">
          <h1 className="title">Currículo Não Encontrado</h1>
          <p className="description">Houve um problema ao carregar os dados do currículo. Verifique o arquivo `public/resumeData.json` e o console para erros.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Head>
        <title>Currículo - {resume.personalInfo.name}</title>
        <meta name="description" content={`Currículo de ${resume.personalInfo.name}: ${resume.personalInfo.title}`} />
      </Head>

      <main className="main">
        <section className="resumeSection">
          <h2>Resumo</h2>
          <p>{resume.summary}</p>
        </section>

        <section className="resumeSection">
          <h2>Experiência Profissional</h2>
          {resume.experience.map((exp, index) => (
            <div key={index} className="experienceBlock">
              <h3>{exp.company}</h3>
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="roleBlock">
                  <h4>{role.title}</h4>
                  <p className="periodLocation">{role.period} | {role.location}</p>
                  {role.responsibilities.length > 0 && (
                    <ul>
                      {role.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="resumeSection">
          <h2>Formação Acadêmica</h2>
          {resume.education.map((edu, index) => (
            <div key={index} className="educationBlock">
              <h3>{edu.institution}</h3>
              <p>{edu.course}</p>
              <p className="periodLocation">{edu.period}</p>
            </div>
          ))}
        </section>

        <section className="resumeSection">
          <h2>Habilidades e Competências</h2>
          <div className="skillsGrid">
            {resume.skills.map((skill, index) => (
              <span key={index} className="skillTag">{skill}</span>
            ))}
          </div>
        </section>

        <section className="resumeSection">
          <h2>Contato</h2>
          <p>Email: <a href={`mailto:${resume.personalInfo.contact.email}`} className="contactLink">{resume.personalInfo.contact.email}</a></p>
          <p>Celular: {resume.personalInfo.contact.mobile}</p>
          <p>LinkedIn: <a href={resume.personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contactLink">Perfil do LinkedIn</a></p>
        </section>
      </main>
    </div>
  );
}