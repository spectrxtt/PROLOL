import React, { useEffect, useState } from 'react';
import '../styles/sugerenciasCampeones.css';
import ChampionCard from './ChampionCard';

const ChampionSuggestions = ({ role, playstyle, experience }) => {
    const [champions, setChampions] = useState([]);
    const [error, setError] = useState(null); // Para manejar errores

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await fetch(`http://localhost:8000/probuild/expert-system/?role=${role}&playstyle=${playstyle}&experience=${experience}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setChampions(data.recommendations);
            } catch (error) {
                setError(error.message); // Guardar el error en el estado
            }
        };

        fetchRecommendations();
    }, [role, playstyle, experience]);

    return (
        <div className="pro-buildS-container">
            <h2 className="title">PRO BUILD</h2>
            {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error si existe */}
            <div className="champion-grid">
                {champions.map((champion, index) => (
                    <ChampionCard key={index} {...champion} />
                ))}
            </div>
        </div>
    );
};

export default ChampionSuggestions;
