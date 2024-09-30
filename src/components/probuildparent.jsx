import React, { useState } from 'react';
import ProBuildRoleSelection from './rol';
import ProBuildPlaystyleSelection from './estiloJuego';
import ProBuildSkillLevelSelection from './nivelExperiencia';

const ProBuild = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => setStep(prevStep => prevStep + 1);
    const handleBack = () => setStep(prevStep => prevStep - 1);

    return (
        <div>
            {step === 1 && <ProBuildRoleSelection onNext={handleNext} />}
            {step === 2 && <ProBuildPlaystyleSelection onBack={handleBack} onNext={handleNext} />}
            {step === 3 && <ProBuildSkillLevelSelection onBack={handleBack} onNext={handleNext} />}
        </div>
    );
};

export default ProBuild;