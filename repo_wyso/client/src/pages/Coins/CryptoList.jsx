// src/pages/Coins/CryptoList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoList.css';
import TradingViewChart from '../../components/TradingViewChart';

const CryptoList = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSymbol, setSelectedSymbol] = useState('BINANCE:BTCUSDT');

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

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleCryptoClick = (symbol) => {
        setSelectedSymbol(`${symbol}`);
    };

    return (
        <div className="flex justify-between p-6">
            <div className="w-1/2 mr-8">
                <h1 className="text-lg font-bold mb-2">Top 10 Criptomonedas</h1>
                <ul>
                    {cryptos.map((crypto) => (
                        <li
                            key={crypto.id}
                            className="bg-gray-800 rounded-lg p-2 my-2 cursor-pointer transition-colors duration-300 hover:bg-violet-900 flex "
                            onClick={() => handleCryptoClick(`${crypto.symbol.toUpperCase()}USDT`)}
                        >
                            <img src={crypto.image} alt={`${crypto.name} icon`} className="w-6 h-6 mr-2" />
                            <span>{crypto.name} ({crypto.symbol.toUpperCase()}): ${crypto.current_price.toLocaleString()}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 mt-4">
                <TradingViewChart symbol={selectedSymbol} />
            </div>
        </div>
    );
};

export default CryptoList;
