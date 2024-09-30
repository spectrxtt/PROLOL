// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ handleProBuildClick }) => {
    const navigate = useNavigate();
    const handleProBuildClickj = () => {
        navigate('/pro-build');
    };
    const handlehome = () => {
        navigate('/');
    };
    return (
        <header className="header">
            <nav>
                <div className="logo-container">
                    <div className="logo"></div>
                    <h1>PROFESSIONAL <br /> RIFT <br /> ORACLE</h1>
                </div>
                <ul className="nav-links">
                    <li>
                        <button onClick={handlehome}>INICIO</button>
                    </li>
                    <li>
                        <button onClick={handleProBuildClickj}>PRO BUILD</button>
                    </li>
                    <li>
                        <button onClick={handleProBuildClickj}>CAMPEONES</button>
                    </li>
                    <li>
                        <button onClick={handleProBuildClickj}>INICIAR SESION</button>
                    </li>
                </ul>
                <div className="search-container">
                    <input type="text" placeholder="Buscar Campeones" className="search-input" />
                    <button className="search-button">🔍</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
