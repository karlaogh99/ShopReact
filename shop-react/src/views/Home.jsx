import React from 'react';
import { Link } from 'react-router-dom';
import '../stile/Home.css';
export const Home = () => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1 className="landing-title">¡Bienvenido al mundo del voleibol!</h1>
                <p className="landing-subtitle">
                    Descubre nuestra colección exclusiva de productos para amantes del voleibol.
                </p>
                <Link to="/product">
                    <button className="landing-button">Ver Productos</button>
                </Link>
            </div>
        </div>
    );
};
