import React, { useEffect, useState, useRef } from 'react';
import "./CryptoList.css";
import axios from 'axios';
import { motion } from 'framer-motion';
import TradingViewChart from '../../components/TradingViewChart';
import GraphicButton from './GraphicButton';
import HidenButton from './HidenButton';
import ErrorComponent from './Error.component';

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSymbol, setSelectedSymbol] = useState(null);
    const [chartVisible, setChartVisible] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(true);
    const chartRef = useRef(null);

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

    useEffect(() => {
        if (selectedSymbol && chartVisible && chartRef.current) {
            chartRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedSymbol, chartVisible]);

    const handleStopViewing = () => {
        setSelectedSymbol(null);
        setChartVisible(false);
        setIsTableVisible(true);
    };

    const handleShowChart = (symbol) => {
        setSelectedSymbol(`${symbol.toUpperCase()}`);
        setChartVisible(true);
        setIsTableVisible(false);
    };

    const getPercentageClass = (percentage) => {
        return percentage >= 0 ? 'text-green-500' : 'text-red-500';
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <ErrorComponent />;

    return (
        <div className="container mx-auto px-4 lg:px-0">
            {isTableVisible && (
                <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 ">Nombre</th>
                                <th className="px-4 py-2">Precio Actual</th>
                                <th className="px-4 py-2">Variación 24h</th>
                                <th className="px-4 py-2 hidden md:table-cell">ATH</th>
                                <th className="px-4 py-2 hidden md:table-cell">ATL</th>
                                <th className="px-4 py-2 hidden md:table-cell ">Capitalización de Mercado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptos.map((crypto) => (
                                <tr key={crypto.id}>

                                    <td className='flex justify-center mt-6'>
                                        <img src={crypto.image} alt={`${crypto.name} icon`} className="w-6 h-6 mr-2" />
                                        <span className="hidden md:table-cell">{crypto.name}</span> ({crypto.symbol.toUpperCase()})
                                    </td>
                                    <td className='text-center'> ${crypto.current_price.toLocaleString()}</td>
                                    <td className={`text-center ${getPercentageClass(crypto.price_change_percentage_24h)}`} >
                                        {crypto.price_change_percentage_24h}</td>
                                    <td className='text-center hidden md:table-cell'>${crypto.ath}</td>
                                    <td className='text-center hidden md:table-cell'>${crypto.atl}</td>
                                    <td className='text-center hidden md:table-cell'>${crypto.market_cap.toLocaleString()}</td>
                                    <td className='py-3'>
                                        <GraphicButton onClick={() => handleShowChart(`${crypto.symbol.toUpperCase()}`)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            )}
            {selectedSymbol && chartVisible && (
                <div className="flex justify-center mt-4">
                    <HidenButton onClick={handleStopViewing} />
                </div>
            )}
            <div className="w-full md:w-3/4 mx-auto mt-4 pb-4" ref={chartRef}>
                {selectedSymbol && chartVisible && <TradingViewChart key={selectedSymbol} symbol={selectedSymbol} />}
            </div>
        </div>
    );
};

export default CryptoList;
