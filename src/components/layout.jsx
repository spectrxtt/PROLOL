// src/components/Layout.js
import React from 'react';
import Header from './header';

const Layout = ({ children, handleProBuildClick }) => {
    return (
        <>
            <Header handleProBuildClick={handleProBuildClick} />
            <main>
                {children}
            </main>
        </>
    );
};

export default Layout;
