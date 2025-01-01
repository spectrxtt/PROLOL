import React, { useState } from 'react';
import top from '../img/top.png';
import mid from '../img/mid.png';
import jungla from '../img/jungla.png';
import adc from '../img/adc.png';
import sup from '../img/support.png';
import { useNavigate } from 'react-router-dom';

const RoleCard = ({ icon, title, description, onClick, isSelected }) => (
    <div
        className={`p-4 rounded-lg text-center cursor-pointer ${isSelected ? 'bg-red-500' : 'bg-gray-800'} hover:bg-gray-700`}
        onClick={onClick}
    >
        <div className="flex justify-center mb-2">
            <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
        </div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
);


const ProBuildRoleSelection = ({ onBack, onNext }) => {
    const [selectedRole, setSelectedRole] = useState(null);

    const navigate = useNavigate();
    const handlehome = () => {
        navigate('/');
    };
    const handleRoleClick = (role) => {
        setSelectedRole(role);
    };


    const handleNextClick = () => {
        if (selectedRole) {
            onNext(selectedRole);
        } else {
            alert('Por favor, selecciona un rol antes de continuar.');
        }
    };

    return (
        <div className="relative bg-gray-900 p-8 min-h-screen pt-20">
            {/* Progress bar and buttons moved here */}
            <div className="flex justify-between items-center w-full mb-8 relative">
                <div className="flex items-start mb-8 space-x-4"> {/* Cambié items-center por items-start */}
                    <h2 className="text-white text-3xl font-bold">PRO BUILD</h2>
                    <div className="bg-gray-800 rounded p-2">
                        <h3 className="text-white text-xl font-semibold">ROL</h3>
                        <p className="text-gray-400 text-sm">Elige tu rol preferido</p>
                    </div>
                </div>
                <div
                    className="flex items-center space-x-4 ml-auto pr-8"> {/* ml-auto empuja todo a la derecha y pr-8 añade 2rem de margen */}
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-lg" onClick={handlehome}>
                        ATRÁS
                    </button>
                    <div className="w-32 bg-gray-600 h-1">
                        <div className="bg-red-500 h-1 w-2/3"></div>
                    </div>
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-lg" onClick={handleNextClick}>
                        SIGUIENTE
                    </button>
                </div>
            </div>

            {/* Updated header to be horizontal */}


            {/* Role selection grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <RoleCard
                    icon={top}
                    title="TOP LANE"
                    description="Línea para campeones tanque o peleadores que suelen ser más resistentes."
                    onClick={() => handleRoleClick('top')}
                    isSelected={selectedRole === 'top'}
                />
                <RoleCard
                    icon={jungla}
                    title="JUNGLA"
                    description="Área entre las líneas donde los campeones limpian monstruos neutrales y ayudan a las otras líneas."
                    onClick={() => handleRoleClick('jungle')}
                    isSelected={selectedRole === 'jungla'}
                />
                <RoleCard
                    icon={mid}
                    title="MID LANE"
                    description="Línea central, frecuentada por campeones magos o asesinos con alto impacto en el juego."
                    onClick={() => handleRoleClick('mid')}
                    isSelected={selectedRole === 'mid'}
                />
                <RoleCard
                    icon={adc}
                    title="AD CARRY"
                    description="Línea inferior donde los campeones de daño a distancia, como tiradores, escalan para hacer daño."
                    onClick={() => handleRoleClick('bottom')}
                    isSelected={selectedRole === 'bottom'}
                />
                <RoleCard
                    icon={sup}
                    title="SUPPORT"
                    description="Campeones que se encargan de proteger y asistir al equipo, normalmente acompañan al AD Carry en la línea inferior."
                    onClick={() => handleRoleClick('support')}
                    isSelected={selectedRole === 'support'}
                />
            </div>


        </div>
    );
};

export default ProBuildRoleSelection;
