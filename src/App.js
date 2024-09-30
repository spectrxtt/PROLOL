// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import ProBuild from './components/probuildparent'; // Asegúrate de que este componente englobe las selecciones
import ChampionSuggestions from './components/sujerencias';
import Layout from './components/layout'; // Importa correctamente el layout

function App() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedPlaystyle, setSelectedPlaystyle] = useState(null);
    const [selectedSkillLevel, setSelectedSkillLevel] = useState(null);

    const handleProBuildClick = () => {
        // Lógica para manejar clicks en el header (navegación)
    };

    return (
        <Router>
            <Routes>
                {/* Para cada ruta, renderiza el Layout que contiene el header */}
                <Route path="/" element={<Layout handleProBuildClick={handleProBuildClick}><HomePage /></Layout>} />

                {/* ProBuild contenedor */}
                <Route
                    path="/pro-build"
                    element={
                        <Layout handleProBuildClick={handleProBuildClick}>
                            <ProBuild
                                onRoleSelect={setSelectedRole}
                                onPlaystyleSelect={setSelectedPlaystyle}
                                onSkillLevelSelect={setSelectedSkillLevel}
                            />
                        </Layout>
                    }
                />

                <Route path="/champion-suggestions" element={<Layout handleProBuildClick={handleProBuildClick}><ChampionSuggestions selectedRole={selectedRole} selectedPlaystyle={selectedPlaystyle} selectedSkillLevel={selectedSkillLevel} /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
