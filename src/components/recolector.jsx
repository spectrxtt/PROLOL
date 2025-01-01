import React, { useState } from 'react';
import ProBuildRoleSelection from './ProBuildRoleSelection';
import ProBuildPlaystyleSelection from './ProBuildPlaystyleSelection';
import ProBuildSkillLevelSelection from './ProBuildSkillLevelSelection';
import ChampionSuggestions from './ChampionSuggestions';

const ProBuildFlow = () => {
    // Estados para guardar las selecciones
    const [role, setRole] = useState(null);
    const [playstyle, setPlaystyle] = useState(null);
    const [experience, setExperience] = useState(null);
    const [step, setStep] = useState(1); // Controla el paso en el que estamos

    // Función para avanzar al siguiente paso
    const handleNext = (value) => {
        if (step === 1) setRole(value); // Guardar selección de rol
        if (step === 2) setPlaystyle(value); // Guardar selección de estilo de juego
        if (step === 3) setExperience(value); // Guardar selección de nivel de habilidad

        setStep(step + 1); // Avanzar al siguiente paso
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
            {step === 4 && <ChampionSuggestions role={role} playstyle={playstyle} experience={experience} />}
        </div>
    );
};

export default ProBuildFlow;
