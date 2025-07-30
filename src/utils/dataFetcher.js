// src/utils/dataFetcher.js (Correção para isos.json)
import path from 'path';
import fs from 'fs/promises';

export async function getIsosData() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(jsonDirectory, 'isos.json');

    // Tenta ler o ficheiro. Se não existir, retorna um array vazio.
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data;

  } catch (error) {
    // Se o erro for que o ficheiro não foi encontrado (ENOENT), retorna um array vazio.
    // Para outros erros (JSON inválido, etc.), ainda vamos logar.
    if (error.code === 'ENOENT') {
      console.warn("Aviso: public/isos.json não encontrado. A página de Downloads será exibida sem conteúdo.");
      return []; // Retorna um array vazio se o ficheiro não existir
    } else {
      console.error("Falha ao buscar dados das ISOs (verifique public/isos.json e caminho):", error);
      return []; // Retorna array vazio para outros erros também
    }
  }
}

export async function getResumeData() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(jsonDirectory, 'resumeData.json');

    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data;

  } catch (error) {
    console.error("Falha ao buscar dados do currículo (verifique public/resumeData.json e caminho):", error);
    return null; // Retorna null em caso de erro para a página de currículo
  }
}