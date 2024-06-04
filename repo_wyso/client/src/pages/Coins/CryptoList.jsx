import React, { useEffect, useState } from 'react';
import "./CryptoList.css"
import axios from 'axios';
import { motion } from 'framer-motion';
import TradingViewChart from '../../components/TradingViewChart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import GraphicButton from './GraphicButton';
import HidenButton from './HidenButton';
import ErrorComponent from './Error.component';

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSymbol, setSelectedSymbol] = useState(null);
    const [chartVisible, setChartVisible] = useState(false);
    const [isAccordionExpanded, setIsAccordionExpanded] = useState(true);
    const [isAccordionVisible, setIsAccordionVisible] = useState(true); // Variable de estado para controlar la visibilidad del acordeón

    useEffect(() => { // Fetch de coingecko
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
            setIsAccordionVisible(true); // Mostrar el acordeón cuando se oculta el gráfico
        } else {
            setSelectedSymbol(symbol);
            setChartVisible(true);
            setIsAccordionExpanded(false); // Cuando se muestra el gráfico, se colapsa el acordeón
            setIsAccordionVisible(false); // Ocultar el acordeón cuando se muestra el gráfico
        }
    };

    const handleStopViewing = () => { // Al dejar de ver el gráfico, se expande el acordeón
        setSelectedSymbol(null);
        setChartVisible(false);
        setIsAccordionExpanded(true);
        setIsAccordionVisible(true); // Mostrar el acordeón cuando se oculta el gráfico
    };

    const handleShowChart = (symbol) => { // Cuando se muestra el gráfico, se colapsa el acordeón
        setSelectedSymbol(`${symbol.toUpperCase()}`);
        setChartVisible(true);
        setIsAccordionExpanded(false);
        setIsAccordionVisible(false); // Ocultar el acordeón cuando se muestra el gráfico
    };

    const getPercentageClass = (percentage) => { // Marketcap verde o rojo
        return percentage >= 0 ? 'text-green-500' : 'text-red-500';
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <ErrorComponent />;

    return (
        <div className="container mx-auto px-4 lg:px-0 ">
            <div className="rounded-full flex justify-center items-center flex-col md:flex-row gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs lg:text-base transition ">
                {isAccordionVisible && (
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 5, y: 5 }} transition={{ duration: 0.5 }}>
                        <Accordion
                            expanded={isAccordionExpanded}
                            onChange={(event, expanded) => setIsAccordionExpanded(expanded)}
                            className="tema-de-acordeon "
                        >
                            <AccordionSummary>
                                <h1 className="text-center md:text-left">Top 10 Criptomonedas</h1>
                            </AccordionSummary>
                            <AccordionDetails>
                                <motion.ul layout>
                                    {cryptos.map((crypto) => (
                                        <motion.li
                                            key={crypto.id}
                                            layout
                                            className="bg-gray-800 rounded-lg p-4 my-2 cursor-pointer transition-colors duration-300 hover:bg-violet-900 flex items-center justify-between"
                                        >
                                            <div onClick={() => handleCryptoClick(`${crypto.symbol.toUpperCase()}USDT`)} className="flex items-center space-x-2 md:space-x-9 text-indigo-400">
                                                <img src={crypto.image} alt={`${crypto.name} icon`} className="w-6 h-6" />
                                                <div className="flex flex-col md:flex-row">
                                                    <span className="md:hidden">{crypto.name} ({crypto.symbol.toUpperCase()})</span>
                                                    <span className="hidden md:block">{crypto.name}</span>
                                                    <span className="hidden md:block">({crypto.symbol.toUpperCase()})</span>
                                                </div>
                                                <span className="">${crypto.current_price.toLocaleString()}</span>
                                                <span className={`ml-2 md:ml-8 ${getPercentageClass(crypto.price_change_percentage_24h)}`}>
                                                    24h: {crypto.price_change_percentage_24h ? `${crypto.price_change_percentage_24h}%` : 'N/A'}
                                                </span>
                                                <span className="hidden md:block">Market Cap: ${crypto.market_cap.toLocaleString()}</span>
                                            </div>
                                            <GraphicButton onClick={() => handleShowChart(`${crypto.symbol.toUpperCase()}`)} />
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </AccordionDetails>
                        </Accordion>
                    </motion.div>
                )}

            </div>
            {selectedSymbol && chartVisible && (
                <div className="flex justify-center mt-4">
                    <HidenButton onClick={handleStopViewing} />
                </div>
            )}
            <div className="w-full md:w-3/4 mx-auto mt-4 pb-8">
                {selectedSymbol && chartVisible && <TradingViewChart key={selectedSymbol} symbol={selectedSymbol} />}
            </div>
        </div>
    );
};

export default CryptoList;
