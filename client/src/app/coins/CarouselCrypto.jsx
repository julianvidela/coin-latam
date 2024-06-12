import React from 'react';
import { motion } from 'framer-motion';

const CarouselCrypto = ({ cryptos }) => {

    const duplicatedCryptos = [...cryptos, ...cryptos, ...cryptos];

    return (
        <div className="relative w-full overflow-hidden">
            <motion.div
                className="flex"
                animate={{
                    x: '-100%',
                    transition: {
                        ease: 'linear',
                        repeat: Infinity,
                        duration: 20,
                    }
                }}
            >
                {duplicatedCryptos.map((crypto, index) => (
                    <div key={index} className="flex-shrink-0 flex justify-center sm:bg-black rounded-full p-3 mx-8 md:mx-8 lg:mx-2 w-auto" style={{ width: `${100 / cryptos.length}%` }}>
                        <div className="flex items-center ">
                            <img src={crypto.image} alt={`${crypto.name} icon`} className="w-6 h-6 mr-4" />
                            <span>{crypto.symbol.toUpperCase()}</span>
                        </div>
                    </div>

                ))}
            </motion.div>
        </div>
    );
};

export default CarouselCrypto;



