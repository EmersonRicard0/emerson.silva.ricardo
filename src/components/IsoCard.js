// src/components/IsoCard.js
import React from 'react';

function IsoCard({ iso }) {
  return (
    <a
      href={iso.link_download}
      target="_blank"
      rel="noopener noreferrer"
      className="isoCard"
      title={`Baixar ${iso.nome} ${iso.versao}`}
    >
      <div className="cardTopSection">
        {iso.image && (
          <div className="isoImageContainer">
            <img src={iso.image} alt={`Logo ${iso.nome}`} className="isoImage" />
          </div>
        )}
        <div className="cardHeader">
          <h3>{iso.nome}</h3>
          <p className="versionBuild">v.{iso.versao} (Build: {iso.build})</p>
        </div>
      </div>
      <div className="cardBody">
        <p className="description">{iso.descricao_curta}</p>
        <p className="size">Tamanho: {iso.tamanho_gb} GB</p>
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