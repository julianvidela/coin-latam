import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import "./CryptoList.css"


const ErrorComponent = () => {
    const [count, setCount] = useState(60);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count - 1);
            setProgress(prevProgress => Math.min(prevProgress + (100 / count), 100));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (count === 0) {
            window.location.reload();
        }
    }, [count]);



    return (
        <div className="pt-12">
            <div className="card sm:w-full md:w-1/2 lg:w-1/3 mx-auto pt-10 lg:h-1/2">
                <img src="https://i.pinimg.com/originals/44/5f/1a/445f1ab89041d998d9fa937ad7f9efa3.gif" alt="Demasiadas peticiones, espere un momento." className="object-center mx-auto lg:w-4/5" />
                {count > 0 && (
                    <>
                        <LinearProgress variant="determinate" value={progress} className="w-full lg:w-4/5 mx-auto" />
                        <p className="text-center pt-3">Demasiadas peticiones, espere un momento.
                            <br/> Se refrescará la página en {count} segundos.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default ErrorComponent;