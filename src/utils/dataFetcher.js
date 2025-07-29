// src/utils/dataFetcher.js
import path from 'path';
import fs from 'fs/promises';

// REMOVIDA: getIsosData não é mais necessária

export async function getResumeData() {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(jsonDirectory, 'resumeData.json');

    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data;

  } catch (error) {
    console.error("Falha ao buscar dados do currículo (verifique public/resumeData.json e caminho):", error);
    return null;
  }
}