import React, { useEffect } from 'react';

const TradingViewChart = ({ symbol }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            new window.TradingView.widget({
                autosize: true,
                symbol: symbol,
                interval: "240",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "1",
                locale: "es",
                toolbar_bg: "#f1f3f6",
                enable_publishing: false,
                withdateranges: false,
                hide_side_toolbar: true,
                allow_symbol_change: true,
                watchlist: [
                    symbol
                ],
                details: true,
                hotlist: true,
                calendar: true,
                studies: [
                    "STD;SMA"
                ],
                container_id: "tradingview_chart",
                show_popup_button: true,
                popup_width: "1000",
                popup_height: "450"
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [symbol]);

    const chartStyle = {
        width: '100%',
        height: '750px', // Altura predeterminada
    };

    // Establecer altura diferente para pantallas pequeñas
    if (window.innerWidth <= 768) {
        chartStyle.height = '500px'; // Altura reducida para pantallas pequeñas
    }

    return (
        <div className="tradingview-widget-container">
            <div id="tradingview_chart" style={chartStyle}></div>
        </div>
    );
};

export default TradingViewChart;
