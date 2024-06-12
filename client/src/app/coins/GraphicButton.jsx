"use client"
import React from 'react';
import './GraphicButton.css';

const GraphicButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="animated-button py-2">
            <img src="GraphicIcon.svg" alt="Chart Icon" className="arr-2 hidden md:table-cell" />
            <span className="text">Ver gráfico</span>
            <span className="circle"></span>
            <img src="GraphicIcon.svg" alt="Chart Icon" className="arr-1 " />
        </button>
    );
};

export default GraphicButton;
