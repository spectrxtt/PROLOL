import React from 'react';
import '../styles/HomePage.css';
import jinx from '../img/jackson-caspersz-jinx-3-removebg-preview.webp';
import blitz from '../img/Blitzcrank_Render_2.webp';

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <nav>
                    <div className="logo-container">
                        <div className="logo"></div>
                        <h1>PROFESSIONAL <br/> RIFT <br/>ORACLE</h1>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#inicio">INICIO</a></li>
                        <li><a href="#pro-build">PRO BUILD</a></li>
                        <li><a href="#campeones">CAMPEONES</a></li>
                        <li><a href="#iniciar-sesion">INICIAR SESION</a></li>
                    </ul>
                    <div className="search-container">
                        <input type="text" placeholder="Buscar Campeones" className="search-input"/>
                        <button className="search-button">🔍</button>
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <section className="hero-section">
                    <div className="featured-champion">
                    <img src={jinx} alt="Jinx" className="champion-image"/>
                    </div>
    <div className="champion-info">
                        <h2>TU CAMINO HACIA LA VICTORIA COMIENZA AQUÍ</h2>
                        <p>Descubre nuestro sistema experto que te ofrece recomendaciones personalizadas de campeones, ítems y runas. Adaptado a tu rol, nivel de habilidad y estilo de juego. ¡Comienza a jugar de manera más estratégica hoy mismo!</p>
                    </div>
                </section>

                <div className="pro-build-banner">
                    PRO BUILD PRO BUILD PRO BUILD PRO BUILD PRO BUILD PRO BUILD PRO BUILD
                </div>

                <section className="champion-grid">

                </section>

                <section className="pro-build-section">
                    <img src={blitz} alt="Pro Build Champion" className="pro-build-image" />
                    <div className="pro-build-info">
                        <h3>PRO BUILD</h3>
                        <p>Analizamos datos de partidas de alto nivel, para proporcionarte recomendaciones de acuerdo a tus requerimientos, incluyendo el rol que juegas, tu nivel de habilidad y tu estilo de juego personal. A partir de esta información, genera recomendaciones precisas de campeones, ítems y runas que se adaptan a las tendencias actuales del meta. Esto te permite tomar decisiones estratégicas informadas. ¡Explora cómo nuestras recomendaciones pueden transformar tu experiencia de juego!</p>
                        <div className="pro-build-details">
                            <button className="ver-mas-button">Ver mas</button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>FOOTER</p>
            </footer>
        </div>
    );
};

export default HomePage;