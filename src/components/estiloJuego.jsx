import React from 'react';
import '../styles/styleSelection.css';

const PlaystyleCard = ({ title, description, onClick }) => (
    <div className="playstyle-card" onClick={onClick}>
        <h3 className="playstyle-title">{title}</h3>
        <div className="playstyle-image"></div>
        <p className="playstyle-description">{description}</p>
    </div>
);

const ProBuildPlaystyleSelection = ({ onBack, onNext }) => {
    return (
        <div className="pro-build-container">
            <div className="header">
                <h2 className="title">PRO BUILD</h2>
                <div className="navigation">
                    <button className="nav-button" onClick={onBack}>ATRAS</button>
                    <button className="nav-button" onClick={onNext}>SIGUIENTE</button>
                </div>
            </div>

            <div className="playstyle-selection">
                <h3 className="selection-title">ESTILO DE JUEGO</h3>
                <p className="selection-description">Elige tu estilo de juego</p>
            </div>

            <div className="playstyle-grid">
                <PlaystyleCard title="Agresivo" description="Ideal para quienes buscan atacar constantemente." onClick={() => onNext('agresivo')} />
                <PlaystyleCard title="balanceado" description="Enfocado en la supervivencia y control del juego." onClick={() => onNext('balanceado')} />
                <PlaystyleCard title="defensivo" description="Jugadores que controlan el mapa y toman decisiones estratégicas." onClick={() => onNext('defensivo')} />
            </div>

            <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
            </div>
        </div>
    );
};

export default ProBuildPlaystyleSelection;
