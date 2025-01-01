import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ChampionDetail = () => {
  const { championId } = useParams();
  const { state } = useLocation();
  const [version, setVersion] = useState('');
  const [championData, setChampionData] = useState(null);
  const [spellsData, setSpellsData] = useState([]);
  const [itemsData, setItemsData] = useState({});
  const [runesData, setRunesData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // Obtener la última versión
        const versionResponse = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
        const versions = await versionResponse.json();
        const latestVersion = versions[0];
        setVersion(latestVersion);

        // Obtener datos del campeón
        const champResponse = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/es_MX/champion/${championId}.json`
        );
        const champData = await champResponse.json();
        setChampionData(champData.data[championId]);

        // Preparar datos de habilidades con sus teclas
        const spellKeys = ['Q', 'W', 'E', 'R'];
        const spells = champData.data[championId].spells.map((spell, index) => ({
          id: spell.id,
          name: spell.name,
          description: spell.description,
          key: spellKeys[index],
          image: `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/spell/${spell.image.full}`
        }));
        setSpellsData(spells);

        // Obtener datos de items
        const itemsResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/item.json`);
        const itemsJson = await itemsResponse.json();
        setItemsData(itemsJson.data);

        // Obtener datos de runas
        const runesResponse = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/es_MX/runesReforged.json`);
        const runesJson = await runesResponse.json();
        setRunesData(runesJson);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (championId) {
      fetchAllData();
    }
  }, [championId]);

  const getRuneData = (runeName) => {
    for (const category of runesData) {
      for (const slot of category.slots) {
        const rune = slot.runes.find(rune => rune.name === runeName);
        if (rune) {
          return {
            name: rune.name,
            icon: `https://ddragon.leagueoflegends.com/cdn/img/${rune.icon}`
          };
        }
      }
    }
    return null;
  };

  const getItemData = (itemName) => {
    for (const itemId in itemsData) {
      if (itemsData[itemId].name === itemName) {
        return {
          name: itemName,
          image: `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${itemId}.png`
        };
      }
    }
    return null;
  };

  if (!championData) {
    return (
      <div className="text-white text-center p-4">
        Cargando información del campeón...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1428] text-white">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8">PRO BUILD</h2>

        {/* Sección Superior */}
        <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
          {/* Campeón Info */}
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championId}.png`}
                alt={championData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{championData.name}</h3>
              <p className="text-blue-400">{state?.role || 'No role specified'}</p>
              <p className="text-gray-400">{championData.tags.join(' / ')}</p>
            </div>
          </div>

          {/* Habilidades */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-4">HABILIDADES</h3>
            <div className="flex gap-4">
              {spellsData.map((spell, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src={spell.image}
                      alt={spell.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm mt-2">{spell.name}</span>
                  <span className="text-blue-400 text-sm font-bold">{spell.key}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Runas */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">RUNAS</h3>
          <div className="flex gap-4">
            {state?.runes?.map((runeName, index) => {
              const runeData = getRuneData(runeName);
              return (
                <div key={index} className="flex flex-col">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden">
                    {runeData && (
                      <img
                        src={runeData.icon}
                        alt={runeData.name}
                        className="w-full h-full object-cover p-2"
                      />
                    )}
                  </div>
                  <span className="text-xs mt-1 text-gray-300">{runeData?.name || runeName}</span>
                </div>
              );
            }) || Array(6).fill(null).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">ITEMS</h3>
          <div className="flex gap-4">
            {state?.items?.map((itemName, index) => {
              const itemData = getItemData(itemName);
              return (
                <div key={index} className="flex flex-col">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg overflow-hidden">
                    {itemData && (
                      <img
                        src={itemData.image}
                        alt={itemData.name}
                        className="w-full h-full object-cover p-2"
                      />
                    )}
                  </div>
                  <span className="text-xs mt-1 text-gray-300">{itemData?.name || itemName}</span>
                </div>
              );
            }) || Array(6).fill(null).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-gray-800 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionDetail;