// src/components/Layout.js
import React from 'react';
import Header from './header';

const Layout = ({ children, handleProBuildClick }) => {
    return (
        <>
            <Header handleProBuildClick={handleProBuildClick} />
            {/* Establecer un margen superior fijo */}
            <main style={{ marginTop: '6.5rem' }}> {/* Ajusta el valor si es necesario */}
                {children}
            </main>
        </>
    );
};

export default Layout;

