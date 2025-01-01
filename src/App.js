
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import ProBuild from './components/probuildparent';
import ChampionSuggestions from './components/sujerencias';
import ChampionDetail from './components/championDetail';  // Importar el nuevo componente
import Layout from './components/layout';
import LoginRegister from './components/loginRegister';

function App() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedPlaystyle, setSelectedPlaystyle] = useState(null);
    const [selectedSkillLevel, setSelectedSkillLevel] = useState(null);

    const handleProBuildClick = () => {
        // Lógica para manejar clicks en el header
    };

    // Imprimir selecciones para depurar
    console.log("Role: ", selectedRole);
    console.log("Playstyle: ", selectedPlaystyle);
    console.log("Skill Level: ", selectedSkillLevel);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout handleProBuildClick={handleProBuildClick}><HomePage /></Layout>} />
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
                <Route
                    path="/champion-suggestions"
                    element={
                        <Layout handleProBuildClick={handleProBuildClick}>
                            <ChampionSuggestions
                                selectedRole={selectedRole}
                                selectedPlaystyle={selectedPlaystyle}
                                selectedSkillLevel={selectedSkillLevel}
                            />
                        </Layout>
                    }
                />
                <Route
                    path="/champion/:championId/detail"
                    element={
                        <Layout handleProBuildClick={handleProBuildClick}>
                            <ChampionDetail />
                        </Layout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Layout handleProBuildClick={handleProBuildClick}>
                            <LoginRegister />
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;