import React from 'react';
import GraphicIcon from './GraphicIcon.svg';
import './GraphicButton.css';

const GraphicButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="animated-button">
            <img src={GraphicIcon} alt="Chart Icon" className="arr-2" />
            <span className="text">Ver gráfico</span>
            <span className="circle"></span>
            <img src={GraphicIcon} alt="Chart Icon" className="arr-1" />
        </button>
    );
};

export default GraphicButton;
