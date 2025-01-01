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
    const handleLogin = () => {
    navigate('/login');
};

    return (
        <header className="header">
            <nav>
                <div className="logo-container">

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
                        <button onClick={handleLogin}>INICIAR SESION</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
