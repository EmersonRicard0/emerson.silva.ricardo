// src/components/IsoCard.js
import React from 'react';
// REMOVIDA: importação de '../styles/globals.css' daqui, pois já está em _app.js

function IsoCard({ iso }) {
  return (
    <a
      href={iso.link_download}
      target="_blank"
      rel="noopener noreferrer"
      className="isoCard" // Usa a classe direta do CSS global
      title={`Baixar ${iso.nome} ${iso.versao}`}
    >
      <div className="cardHeader">
        <h3>{iso.nome}</h3>
        <p className="versionBuild">v.{iso.versao} (Build: {iso.build})</p>
      </div>
      <div className="cardBody">
        <p className="description">{iso.descricao_curta}</p>
        <p className="size">Tamanho: **{iso.tamanho_gb} GB**</p>
        <p className="releaseDate">Lançamento: {iso.data_lancamento}</p>
        {iso.checksum_sha256 && (
          <p className="checksum">SHA256: <code>{iso.checksum_sha256.substring(0, 10)}...</code></p>
        )}
      </div>
      <div className="downloadButton">Baixar Agora</div>
    </a>
  );
}

export default IsoCard;