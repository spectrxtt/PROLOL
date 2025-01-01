import React, { useState } from 'react';
import agresivo from '../img/fb1557dd3ff9767c20154b3ccb2c965659fd28d2-400x400.gif';
import intermedio from '../img/0_bmCYiJ9wSjUc0L4T.gif';
import defensivo from '../img/i1490941533309832.gif';

const PlaystyleCard = ({ title, description, onClick, isSelected, image }) => (
    <div
        className={`p-4 rounded-lg text-center cursor-pointer ${isSelected ? 'bg-red-500 text-white' : 'bg-gray-800 text-gray-200'} hover:bg-gray-700`}
        onClick={onClick}
    >
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="my-4">
            <img
                src={image}
                alt={title}
                className="h-24 w-full object-cover rounded-lg"
            />
        </div>
        <p className="text-sm mt-2">{description}</p>
    </div>
);


const ProBuildPlaystyleSelection = ({onBack, onNext}) => {
    const [selectedPlaystyle, setSelectedPlaystyle] = useState(null); // Estado de estilo de juego seleccionado

    const handlePlaystyleClick = (playstyle) => {
        setSelectedPlaystyle(playstyle); // Guardamos el estilo seleccionado
    };

    const handleNextClick = () => {
        if (selectedPlaystyle) {
            onNext(selectedPlaystyle); // Avanzamos si hay un estilo seleccionado
        } else {
            alert('Por favor, selecciona un estilo de juego antes de continuar.');
        }
    };

    return (
        <div className="flex flex-col items-center bg-gray-900 p-8 min-h-screen">
            {/* Barra de navegación y barra de progreso */}
            <div className="flex justify-between items-center w-full mb-8 relative">
                <div className="flex items-start mb-8 space-x-4">
                    <h2 className="text-white text-3xl font-bold">PRO BUILD</h2>
                    <div className="bg-gray-800 rounded p-2">
                        <h3 className="text-white text-xl font-semibold">ESTILO DE JUEGO</h3>
                        <p className="text-gray-400 text-sm">Elige tu estilo preferido</p>
                    </div>
                </div>
                <div
                    className="flex items-center space-x-4 ml-auto pr-8">
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-lg" onClick={onBack}>
                        ATRÁS
                    </button>
                    <div className="w-32 bg-gray-600 h-1">
                        <div className="bg-red-500 h-1 w-2/3"></div>
                        {/* Cambia la proporción según sea necesario */}
                    </div>
                    <button
                        className="bg-gray-700 text-white py-2 px-4 rounded-lg"
                        onClick={handleNextClick}
                    >
                        SIGUIENTE
                    </button>
                </div>
            </div>

            {/* Tarjetas de estilo de juego */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
                <PlaystyleCard
                    title="Agresivo"
                    description="Ideal para quienes buscan atacar constantemente."
                    image={agresivo} // Se usa el GIF importado
                    onClick={() => handlePlaystyleClick('agresivo')}
                    isSelected={selectedPlaystyle === 'agresivo'}
                />
                <PlaystyleCard
                    title="Balanceado"
                    description="Enfocado en la supervivencia y control del juego."
                    image={intermedio} // Se usa el GIF importado
                    onClick={() => handlePlaystyleClick('balanceado')}
                    isSelected={selectedPlaystyle === 'balanceado'}
                />
                <PlaystyleCard
                    title="Defensivo"
                    description="Jugadores que controlan el mapa y toman decisiones estratégicas."
                    image={defensivo} // Se usa el GIF importado
                    onClick={() => handlePlaystyleClick('defensivo')}
                    isSelected={selectedPlaystyle === 'defensivo'}
                />
            </div>
        </div>
    );
};

export default ProBuildPlaystyleSelection;
