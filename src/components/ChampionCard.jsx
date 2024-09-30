import React from 'react';

const ChampionCard = ({ name, role, playstyle }) => (
    <div className="champion-card">
        <h3>{name}</h3>
        <p>Rol: {role}</p>
        <p>Estilo de juego: {playstyle}</p>
    </div>
);

export default ChampionCard;
