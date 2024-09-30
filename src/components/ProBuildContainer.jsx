import React, { useState } from 'react';
import ProBuildRoleSelection from './ProBuildRoleSelection';
import ProBuildPlaystyleSelection from './ProBuildPlaystyleSelection';
import ProBuildSkillLevelSelection from './ProBuildSkillLevelSelection';

const ProBuildContainer = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [role, setRole] = useState('');
    const [playstyle, setPlaystyle] = useState('');
    const [skillLevel, setSkillLevel] = useState('');

    const handleNext = (nextStep) => {
        setCurrentStep(nextStep);
    };

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        handleNext(currentStep + 1); // Avanzar al siguiente paso
    };

    return (
        <div>
            {currentStep === 0 && <ProBuildRoleSelection onNext={handleRoleSelection} />}
            {currentStep === 1 && <ProBuildPlaystyleSelection onBack={() => handleNext(currentStep - 1)} onNext={(playstyle) => { setPlaystyle(playstyle); handleNext(currentStep + 1); }} />}
            {currentStep === 2 && <ProBuildSkillLevelSelection onBack={() => handleNext(currentStep - 1)} onNext={(skillLevel) => { setSkillLevel(skillLevel); handleNext(currentStep + 1); }} />}
            {currentStep === 3 && <ChampionSuggestions role={role} playstyle={playstyle} experience={skillLevel} />}
        </div>
    );
};

export default ProBuildContainer;
