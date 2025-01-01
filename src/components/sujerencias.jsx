import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChampionCard from './ChampionCard';

const ChampionSuggestions = ({ selectedRole, selectedPlaystyle, selectedSkillLevel, onUpdateRole, onUpdatePlaystyle, onUpdateSkillLevel }) => {
    const [champions, setChampions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const transformRoleName = (role) => {
        const roleMap = {
            top: 'Top Lane',
            jungle: 'Jungla',
            mid: 'Mid Lane',
            bottom: 'AD Carry',
            support: 'Support'
        };
        return roleMap[role.toLowerCase()] || role;
    };

    useEffect(() => {
        const fetchRecommendations = async () => {
            if (!(selectedRole && selectedPlaystyle && selectedSkillLevel)) return;

            setLoading(true);
            try {
                const response = await fetch(`https://probuild-djngo.onrender.com/api/expert-system/?role=${selectedRole}&playstyle=${selectedPlaystyle}&experience=${selectedSkillLevel}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();

                const formattedChampions = data.recommendations.map(champion => ({
                    ...champion,
                    items: [champion.item1, champion.item2, champion.item3, champion.item4, champion.item5, champion.item6, champion.item7, champion.item8].filter(Boolean),
                    runes: [champion.runa1, champion.runa2, champion.runa3, champion.runa4, champion.runa5, champion.runa6].filter(Boolean),
                    role: transformRoleName(champion.role)
                }));

                setChampions(formattedChampions);
                console.log("Datos obtenidos del análisis:", formattedChampions);
            } catch (error) {
                setError(error.message);
                console.error("Error al obtener recomendaciones:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, [selectedRole, selectedPlaystyle, selectedSkillLevel]);

    const handleEdit = (type) => {
        switch(type) {
            case 'role':
                navigate('/pro-build/role-selection', { state: { currentRole: selectedRole, onUpdateRole } });
                break;
            case 'playstyle':
                navigate('/pro-build/playstyle-selection', { state: { currentPlaystyle: selectedPlaystyle, onUpdatePlaystyle } });
                break;
            case 'skillLevel':
                navigate('/pro-build/skill-level-selection', { state: { currentSkillLevel: selectedSkillLevel, onUpdateSkillLevel } });
                break;
            default:
                console.error('Unknown edit type:', type);
        }
    };

    return (
        <div className="bg-gray-900 p-6 text-white">
            <h2 className="text-3xl font-bold mb-6">PRO BUILD</h2>

            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">INFORMACIÓN</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-gray-400">Rol</p>
                            <p className="font-medium">{transformRoleName(selectedRole)}</p>

                        </div>
                        <div>
                            <p className="text-gray-400">Estilo de juego</p>
                            <p className="font-medium">{selectedPlaystyle}</p>

                        </div>
                        <div>
                            <p className="text-gray-400">Nivel de habilidad</p>
                            <p className="font-medium">{selectedSkillLevel}</p>

                        </div>
                    </div>
                </div>

                <div className="col-span-3 space-y-4">
                    {loading && <p className="text-center">Cargando sugerencias...</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {!loading && champions.length === 0 && (
                        <p className="text-center">No se encontraron campeones para tus selecciones.</p>
                    )}
                    {champions.map((championData, index) => (
                        <ChampionCard
                            key={index}
                            champion={championData.champion}
                            role={championData.role}
                            items={championData.items}
                            runes={championData.runes}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChampionSuggestions;