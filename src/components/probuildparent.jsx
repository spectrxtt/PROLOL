import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProBuildRoleSelection from './rol';
import ProBuildPlaystyleSelection from './estiloJuego';
import ProBuildSkillLevelSelection from './nivelExperiencia';

const ProBuild = ({ onRoleSelect, onPlaystyleSelect, onSkillLevelSelect }) => {
    const [step, setStep] = useState(1); // Controla el paso actual
    const navigate = useNavigate(); // Para navegación entre rutas

    // Función para avanzar al siguiente paso
    const handleNext = (value) => {
        if (step === 1) {
            onRoleSelect(value);
        } else if (step === 2) {
            onPlaystyleSelect(value);
        } else if (step === 3) {
            onSkillLevelSelect(value);
            navigate('/champion-suggestions');  // Navegar a la página de sugerencias
        }
        setStep(step + 1);
    };


    // Función para retroceder al paso anterior
    const handleBack = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {step === 1 && <ProBuildRoleSelection onNext={handleNext} />}
            {step === 2 && <ProBuildPlaystyleSelection onNext={handleNext} onBack={handleBack} />}
            {step === 3 && <ProBuildSkillLevelSelection onNext={handleNext} onBack={handleBack} />}
        </div>
    );
};

export default ProBuild;
