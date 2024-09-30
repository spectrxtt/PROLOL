import React from 'react';
import '../styles/Rol.css';

const RoleCard = ({ icon, title, description, onClick }) => (
    <div className="role-card" onClick={onClick}> {/* Añadir onClick aquí */}
        <div className="role-icon">{icon}</div>
        <h3 className="role-title">{title}</h3>
        <p className="role-description">{description}</p>
    </div>
);

const ProBuildRoleSelection = ({ onNext }) => {
    const handleRoleClick = (role) => {
        onNext(role); // Pasar el rol seleccionado al componente padre
    };

    return (
        <div className="pro-build-container">
            <div className="role-selection">
                <h3 className="selection-title">ROL</h3>
                <p className="selection-description">Elige tu rol preferido</p>
            </div>

            <div className="role-grid">
                <RoleCard icon="□" title="TOP LANE" description="Lorem ipsum" onClick={() => handleRoleClick('top')} />
                <RoleCard icon="♨" title="JUNGLA" description="Lorem ipsum" onClick={() => handleRoleClick('jungla')} />
                <RoleCard icon="☐" title="MID LANE" description="Lorem ipsum" onClick={() => handleRoleClick('mid')} />
                <RoleCard icon="◫" title="AD CARRY" description="Lorem ipsum" onClick={() => handleRoleClick('ad carry')} />
                <RoleCard icon="👔" title="SOPORTE" description="Lorem ipsum" onClick={() => handleRoleClick('support')} />
            </div>
        </div>
    );
};

export default ProBuildRoleSelection;
