import React from 'react';
import jinx from '../img/jackson-caspersz-jinx-3-removebg-preview.webp';
import blitz from '../img/Blitzcrank_Render_2.webp';
import result from '../img/Captura de pantalla 2024-11-03 225003.png';
import example from '../img/Diseño sin título.gif';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const bannerItem = (
        <span className="pro-build-banner-item text-white font-bold text-lg mx-4 flex items-center">
            PRO BUILD
            <svg className="pro-build-banner-icon inline-block ml-6 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L5 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 6L9 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    );
    const navigate = useNavigate();

     const handleProBuildClickj = () => {
        navigate('/pro-build');
    };

    return (
        <div className="home-page bg-[#1a1a2e] text-white min-h-screen">
            <main className="main-content pb-24">
                {/* Sección de imagen reducida */}
                <section
                    className="hero-section flex flex-col md:flex-row bg-gradient-to-br from-[#030510] to-[#09014e] via-[#09014e] to-[#030510] items-center ">
                    <div className="featured-champion md:w-1/2 mt-2">
                        {/* Reducción del tamaño de la imagen */}
                        <img src={jinx} alt="Jinx" className="champion-image w-2/3 h-auto mx-auto"/>
                    </div>
                    <div className="champion-info md:w-1/2 md:pl-8">
                        <h2 className="text-3xl font-bold mb-4">TU CAMINO HACIA LA VICTORIA COMIENZA AQUÍ</h2>
                        <p>Descubre nuestro sistema experto que te ofrece recomendaciones personalizadas de campeones,
                            ítems y runas. Adaptado a tu rol, nivel de habilidad y estilo de juego. ¡Comienza a jugar de
                            manera más estratégica hoy mismo!</p>
                    </div>
                </section>

                {/* Banner con fondo rojo brillante */}
                <div className="pro-build-banner bg-[#E94560] overflow-hidden whitespace-nowrap py-2">
                    <div className="pro-build-banner-content animate-marquee flex items-center space-x-8">
                        {[...Array(10)].map((_, index) => (
                            <React.Fragment key={index}>
                                {bannerItem}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="w-full p-8 bg-gradient-to-br from-[#030510] to-[#09014e] via-[#09014e] to-[#030510]">
                    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
                        {/* Columna de texto */}
                        <div className="md:w-1/2 text-white">
                            <h2 className="text-3xl font-bold mb-4">PROFESSIONAL RIFT ORACLE</h2>
                            <p className="text-lg">
                                Diseñado para potenciar la experiencia de juego, nuestro sistema ayuda a los jugadores a
                                tomar decisiones más informadas basadas en su estilo personal de juego. A través de
                                análisis
                                detallados y recomendaciones personalizadas, cada jugador puede encontrar las opciones
                                que mejor se adapten a sus preferencias y estrategias únicas.
                            </p>
                        </div>

                        {/* GIF más pequeño */}
                        <div className="md:w-1/2">
                            <img
                                src={example}
                                alt="Game Analysis Visualization"
                                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>


                {/* Pro Build Section */}
                <section className="pro-build-section flex flex-col md:flex-row items-center bg-[#16213e] p-8">
                    <div className="md:w-1/3">
                        <img src={blitz} alt="Pro Build Champion" className="pro-build-image w-full h-auto"/>
                    </div>
                    <div className="pro-build-info md:w-2/3 md:pl-8">
                        <h3 className="text-2xl font-bold mb-4">PRO BUILD</h3>
                        <p>
                            Analizamos datos de partidas de alto nivel, para proporcionarte recomendaciones de acuerdo a
                            tus requerimientos,
                            incluyendo el rol que juegas, tu nivel de habilidad y tu estilo de juego personal. A partir
                            de esta información, genera
                            recomendaciones precisas de campeones, ítems y runas que se adaptan a las tendencias
                            actuales del meta. Esto te permite
                            tomar decisiones estratégicas informadas. ¡Explora cómo nuestras recomendaciones pueden
                            transformar tu experiencia de juego!
                        </p>

                        {/* Imagen entre el texto y el botón */}
                        <img src={result} alt="Pro Build Feature" className="w-full h-auto my-4"/>

                        <div className="pro-build-details mt-4">
                            <button onClick={handleProBuildClickj}
                                    className="bg-[#e94560] text-white py-2 px-4 rounded-lg">Ver más
                            </button>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="footer bg-[#0f3460] text-center py-4">

            </footer>
        </div>
    );
};

export default HomePage;
