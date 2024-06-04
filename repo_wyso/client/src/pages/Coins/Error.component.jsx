import React, { useState, useEffect } from 'react';

const ErrorComponent = () => {
    const [count, setCount] = useState(60);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (count === 0) {
            // Recargar la página después de 30 segundos
            window.location.reload();
        }
    }, [count]);

    return (
        <div>
            <img src="https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif" alt="Demasiadas peticiones, espere un momento." />
            <p>Error: Demasiadas peticiones, espere un momento. Se refrescará la página en {count} segundos.</p>
        </div>
    );
};

export default ErrorComponent;