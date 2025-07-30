// src/utils/dataFetcher.js (Completo)
import path from 'path';
import fs from 'fs/promises';

export async function getIsosData() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(jsonDirectory, 'isos.json'); // Ou downloads.json no futuro

    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data;

  } catch (error) {
    console.error("Falha ao buscar dados das ISOs (verifique public/isos.json e caminho):", error);
    return [];
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
    // Retorna null para que a página de currículo possa exibir uma mensagem de erro amigável
    return null;
  }
}