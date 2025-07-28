// src/utils/dataFetcher.js
import path from 'path'; // Importa o módulo 'path' do Node.js
import fs from 'fs/promises'; // Importa o módulo 'fs/promises' do Node.js para ler arquivos

export async function getIsosData() {
  try {
    // Constrói o caminho absoluto para o arquivo isos.json
    // process.cwd() é o diretório raiz do seu projeto (seu-site-de-isos)
    const jsonDirectory = path.join(process.cwd(), 'public');
    const filePath = path.join(jsonDirectory, 'isos.json');

    // Lê o conteúdo do arquivo JSON
    const fileContents = await fs.readFile(filePath, 'utf8');

    // Faz o parse do conteúdo para JSON
    const data = JSON.parse(fileContents);
    return data;

  } catch (error) {
    // Adiciona mais detalhes ao log de erro para depuração
    console.error("Falha ao buscar dados das ISOs (verifique public/isos.json e caminho):", error);
    return []; // Retorna um array vazio em caso de erro
  }
}