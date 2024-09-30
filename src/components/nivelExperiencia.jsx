import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SkillLevelSelection.css';

const SkillLevelOption = ({ level, description, isSelected, onClick }) => (
    <div className={`skill-level-option ${isSelected ? 'selected' : ''}`} onClick={onClick}>
        <h3 className="skill-level-title">{level}</h3>
        <p className="skill-level-description">{description}</p>
    </div>
);

const ProBuildSkillLevelSelection = ({ onBack, onNext }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const navigate = useNavigate(); // Para navegar entre rutas

    const skillLevels = [
        { level: 'Principiante', description: 'Ideal para aquellos nuevos en el juego.' },
        { level: 'Intermedio', description: 'Jugadores que tienen experiencia básica.' },
        { level: 'Experto', description: 'Jugadores muy experimentados y estratégicos.' },

    ];

    const handleAnalyze = () => {
        console.log('Navigating to champion suggestions'); // Verifica si se ejecuta
        onNext(selectedLevel); // Llama a la función para pasar el nivel de habilidad seleccionado
        navigate('/champion-suggestions'); // Redirige a la página de sugerencias
    };

    return (
        <div className="pro-build-container skill-level-container">
            <div className="header">
                <h2 className="title">PRO BUILD</h2>
                <div className="navigation">
                    <button className="nav-button" onClick={onBack}>ATRAS</button>
                </div>
            </div>

            <div className="skill-level-selection">
                <h3 className="selection-title">NIVEL DE HABILIDAD</h3>
                <p className="selection-description">Cual es tu experiencia en el juego</p>
            </div>

            <div className="skill-level-options">
                {skillLevels.map((skill, index) => (
                    <SkillLevelOption
                        key={index}
                        level={skill.level}
                        description={skill.description}
                        isSelected={selectedLevel === index}
                        onClick={() => setSelectedLevel(index)} // Actualiza el nivel seleccionado
                    />
                ))}
            </div>

            <button
                className="analyze-button"
                onClick={handleAnalyze}
                disabled={selectedLevel === null} // Deshabilita el botón si no hay selección
            >
                ANALIZAR
            </button>

            <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
            </div>
        </div>
    );
};

export default ProBuildSkillLevelSelection;
