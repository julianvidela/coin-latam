// DeleteButton.jsx

import React, { useState } from 'react';

const HidenButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <button
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="noselect"
            style={{
                width: '150px',
                height: '50px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                background: isHovered ? '#ff3636' : '#e62222', // Cambia el color de fondo en hover
                border: 'none',
                borderRadius: '5px',
                boxShadow: '1px 1px 3px rgba(0,0,0,0.15)',
                position: 'relative',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <span
                className="text"
                style={{
                    transform: isHovered ? 'translateX(0)' : 'translateX(35px)', // Mueve el texto en hover
                    color: isHovered ? 'transparent' : 'white', // Oculta el texto en hover
                    fontWeight: 'bold',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 200ms, color 200ms', // Aplica la transición al texto
                }}
            >
                Cerrar
            </span>
            <span
                className="icon"
                style={{
                    position: 'absolute',
                    borderLeft: '1px solid #c41b1b',
                    transform: isHovered ? 'translateX(0)' : 'translateX(110px)', // Mueve el ícono en hover
                    height: '40px',
                    width: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    transition: 'transform 200ms', // Aplica la transición al ícono
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ width: '15px', fill: '#eee' }}>
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                </svg>
            </span>
        </button>
    );
};

export default HidenButton;
