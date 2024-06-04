import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './CryptoList.css';
import TradingViewChart from '../../components/TradingViewChart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSymbol, setSelectedSymbol] = useState(null);
    const [chartVisible, setChartVisible] = useState(false);
    const [isAccordionExpanded, setIsAccordionExpanded] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 10,
                        page: 1,
                        sparkline: false
                    }
                });
                setCryptos(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleCryptoClick = (symbol) => {  // Cuando se oculta el gráfico, se expande el acordeón
        if (selectedSymbol === symbol) {
            setSelectedSymbol(null);
            setChartVisible(false);
            setIsAccordionExpanded(true);
        } else {
            setSelectedSymbol(symbol);
            setChartVisible(true);
            setIsAccordionExpanded(false); // Cuando se muestra el gráfico, se colapsa el acordeón
        }
    };

    const handleStopViewing = () => { // Al dejar de ver el gráfico, se expande el acordeón
        setSelectedSymbol(null);
        setChartVisible(false);
        setIsAccordionExpanded(true); 
    };

    const handleShowChart = (symbol) => { // Cuando se muestra el gráfico, se colapsa el acordeón
        setSelectedSymbol(symbol);
        setChartVisible(true);
        setIsAccordionExpanded(false); 
    };

    const getPercentageClass = (percentage) => { // Market cap verde o rojo
        return percentage >= 0 ? 'text-green-500' : 'text-red-500';
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: Demasiadas peticiones, espere un momento.</p>;

    return (
        <div className="container mx-auto px-4 lg:px-0 ">
            <div className="rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs lg:text-base transition">
                <Accordion
                    expanded={isAccordionExpanded}
                    onChange={(event, expanded) => setIsAccordionExpanded(expanded)}
                    style={{ backgroundColor: '#4a5568' }}
                    className="w-full md:w-3/4"
                >
                    <AccordionSummary>
                        <h1>Top 10 Criptomonedas</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                        <motion.ul layout>
                            {cryptos.map((crypto) => (
                                <motion.li
                                    key={crypto.id}
                                    layout
                                    className="bg-gray-800 rounded-lg p-4 my-2 cursor-pointer transition-colors duration-300 hover:bg-violet-900 flex items-center justify-between"
                                >
                                    <div onClick={() => handleCryptoClick(`${crypto.symbol.toUpperCase()}USDT`)} className="flex items-center space-x-6 text-indigo-400">
                                        <img src={crypto.image} alt={`${crypto.name} icon`} className="w-6 h-6" />
                                        <span className="">{crypto.name}</span>
                                        <span className="">({crypto.symbol.toUpperCase()})</span>
                                        <span className="">${crypto.current_price.toLocaleString()}</span>
                                        <span className={`ml-8 ${getPercentageClass(crypto.price_change_percentage_24h)}`}>
                                            24h: {crypto.price_change_percentage_24h ? `${crypto.price_change_percentage_24h}%` : 'N/A'}
                                        </span>
                                        <span className="">Market Cap: ${crypto.market_cap.toLocaleString()}</span>

                                    </div>
                                    <button onClick={() => handleShowChart(`${crypto.symbol.toUpperCase()}USDT`)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-400">
                                        Ver gráfico
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </AccordionDetails>
                </Accordion>
                {selectedSymbol && chartVisible && (
                    <button onClick={handleStopViewing} className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-400">
                        Dejar de ver
                    </button>
                )}
            </div>
            <div className="w-full md:w-3/4 mx-auto mt-4">
                {selectedSymbol && chartVisible && <TradingViewChart symbol={selectedSymbol} />}
            </div>
        </div>
    );
};

export default CryptoList;
