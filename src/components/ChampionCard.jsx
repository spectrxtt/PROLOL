import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ChampionCard = ({ champion, role, items, runes }) => {
    const [version, setVersion] = useState('');
    const [itemData, setItemData] = useState({});
    const [runeData, setRuneData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVersionAndItems = async () => {
            try {
                const versionResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
                const versions = await versionResponse.json();
                const latestVersion = versions[0];
                setVersion(latestVersion);

                const runesResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/es_MX/runesReforged.json`);
                const runesJson = await runesResponse.json();
                setRuneData(runesJson);
            } catch (error) {
                console.error('Error al obtener la versión de la API o los datos:', error);
            }
        };

        fetchVersionAndItems();
    }, [champion]);

    const getRuneImageUrl = (runeName) => {
        for (const category of runeData) {
            for (const slot of category.slots) {
                const rune = slot.runes.find((rune) => rune.name === runeName);
                if (rune) {
                    return `https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`;
                }
            }
        }
        return null;
    };

    const handleViewDetail = () => {
        navigate(`/champion/${champion}/detail`, {
            state: {
                champion,
                role,
                items,
                runes
            }
        });
    };

    return (
        <div className="bg-gray-800 rounded-lg shadow-lg w-full max-w-6xl h-32 flex">
            {/* Imagen del campeón */}
            <div className="h-full w-48 relative flex-shrink-0 overflow-hidden">
                <div
                    className="absolute inset-0 w-[130%] h-[130%]"
                    style={{
                        backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: '20% 15%',
                        transform: 'scale(1.1)',
                    }}
                />
            </div>


            {/* Contenido */}
            <div className="flex-1 flex items-center justify-between p-6">
                {/* Nombre y Rol */}
                <div className="flex flex-col">
                    <h2 className="text-white text-2xl font-bold">{champion}</h2>
                    <p className="text-gray-400 text-lg">{role}</p>
                </div>

                {/* Runas */}
                <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-4">
                        <h4 className="text-white text-lg font-semibold">Runas:</h4>
                        {Array.isArray(runes) && runes.length > 0 ? (
                            <div className="flex space-x-2">
                                {runes.slice(0, 6).map((rune, index) => (
                                    <div key={index} className="bg-gray-700 rounded-lg p-2">
                                        {getRuneImageUrl(rune) ? (
                                            <img
                                                src={getRuneImageUrl(rune)}
                                                alt={rune}
                                                title={rune}
                                                className="w-10 h-10 object-contain"
                                            />
                                        ) : (
                                            <div
                                                className="w-10 h-10 flex items-center justify-center text-gray-500 text-xs">No
                                                rune</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-500">No hay runas disponibles</div>
                        )}
                    </div>
                </div>

                {/* Botón Ver más */}
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg"
                    onClick={handleViewDetail}
                >
                    Ver más
                </button>
            </div>
        </div>
    );
};

export default ChampionCard;