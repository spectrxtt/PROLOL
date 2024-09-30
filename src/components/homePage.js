import React from 'react';
import '../styles/HomePage.css';
import jinx from '../img/jackson-caspersz-jinx-3-removebg-preview.webp';
import blitz from '../img/Blitzcrank_Render_2.webp';

const HomePage = () => {

    const bannerItem = (
        <span className="pro-build-banner-item">
        PRO BUILD
        <svg className="pro-build-banner-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L5 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 6L9 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </span>
    );

    return (
        <div className="home-page">

            <main className="main-content">
                <section className="hero-section">
                    <div className="featured-champion">
                        <img src={jinx} alt="Jinx" className="champion-image"/>
                    </div>
                    <div className="champion-info">
                        <h2>TU CAMINO HACIA LA VICTORIA COMIENZA AQUÍ</h2>
                        <p>Descubre nuestro sistema experto que te ofrece recomendaciones personalizadas de campeones,
                            ítems y runas. Adaptado a tu rol, nivel de habilidad y estilo de juego. ¡Comienza a jugar de
                            manera más estratégica hoy mismo!</p>
                    </div>
                </section>

                <div className="pro-build-banner">
                    <div className="pro-build-banner-content">
                        {[...Array(10)].map((_, index) => (
                            <React.Fragment key={index}>
                                {bannerItem}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <section className="champion-grid">

                </section>

                <section className="pro-build-section">
                    <img src={blitz} alt="Pro Build Champion" className="pro-build-image"/>
                    <div className="pro-build-info">
                        <h3>PRO BUILD</h3>
                        <p>Analizamos datos de partidas de alto nivel, para proporcionarte recomendaciones de acuerdo a
                            tus requerimientos, incluyendo el rol que juegas, tu nivel de habilidad y tu estilo de juego
                            personal. A partir de esta información, genera recomendaciones precisas de campeones, ítems
                            y runas que se adaptan a las tendencias actuales del meta. Esto te permite tomar decisiones
                            estratégicas informadas. ¡Explora cómo nuestras recomendaciones pueden transformar tu
                            experiencia de juego!</p>
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