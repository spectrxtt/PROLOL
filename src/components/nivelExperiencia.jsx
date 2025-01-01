import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillLevelOption = ({ level, description, isSelected, onClick }) => (
    <div
        className={`p-4 rounded-lg text-center cursor-pointer transition-colors ${
            isSelected ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-200'
        } hover:bg-gray-700`}
        onClick={onClick}
    >
        <h3 className="text-lg font-semibold">{level}</h3>
        <p className="text-sm mt-2">{description}</p>
    </div>
);

const ProBuildSkillLevelSelection = ({ onBack, onNext }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const navigate = useNavigate(); // Para navegar entre rutas

    const skillLevels = [
        { level: 'principiante', description: 'Ideal para aquellos nuevos en el juego.' },
        { level: 'intermedio', description: 'Jugadores que tienen experiencia básica.' },
        { level: 'experto', description: 'Jugadores muy experimentados y estratégicos.' },
    ];

    const handleAnalyze = () => {
        if (selectedLevel !== null) { // Verifica que selectedLevel no sea null
            console.log('Navigating to champion suggestions');
            onNext(skillLevels[selectedLevel].level); // Pasar el texto en lugar del índice
            navigate('/champion-suggestions'); // Redirige a la página de sugerencias
        } else {
            console.log('No skill level selected'); // Mensaje si no se selecciona nada
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-900 p-8 min-h-screen">
            <div className="flex justify-between items-center w-full mb-8 relative">
                <div className="flex items-start mb-8 space-x-4">
                    <h2 className="text-white text-3xl font-bold">PRO BUILD</h2>
                    <div className="bg-gray-800 rounded p-2">
                        <h3 className="text-white text-xl font-semibold">NIVEL DE EXPERIENCIA</h3>
                        <p className="text-gray-400 text-sm">Elige tu Nivel de experiencia</p>
                    </div>
                </div>
                <div
                    className="flex items-center space-x-4 ml-auto pr-8">
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-lg" onClick={onBack}>
                        ATRÁS
                    </button>
                    <div className="w-32 bg-gray-600 h-1">
                        <div className="bg-red-500 h-1 w-3/3"></div>
                        {/* Cambia la proporción según sea necesario */}
                    </div>
                    <button
                        className="bg-red-500 text-white py-2 px-4 rounded-lg"
                        onClick={handleAnalyze}
                        disabled={selectedLevel === null}
                    >
                        ANALIZAR
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
                {skillLevels.map((skill, index) => (
                    <SkillLevelOption
                        key={index}
                        level={skill.level}
                        description={skill.description}
                        isSelected={selectedLevel === index}
                        onClick={() => setSelectedLevel(index)} // Actualiza el índice seleccionado
                    />
                ))}
            </div>



        </div>
    );
};

export default ProBuildSkillLevelSelection;
