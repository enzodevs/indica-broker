import React, { useEffect, useState } from 'react';
import DataGenerator from '../../utils/dataGenerator';

const Ticker: React.FC = () => {
  const [tickerData, setTickerData] = useState(DataGenerator.generateTickerData(20));

  useEffect(() => {
    // Update ticker data every 30 seconds
    const interval = setInterval(() => {
      const newData = DataGenerator.generateTickerData(1)[0];
      setTickerData(prev => [...prev.slice(1), newData]);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-background-light overflow-hidden py-2 border-b border-background">
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Duplicate the ticker items to create seamless loop */}
        {[...tickerData, ...tickerData].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="inline-flex items-center mx-6 text-white"
          >
            <span className="font-mono text-primary">
              {item.maskedUsername}
            </span>
            <span className="mx-2">withdrew</span>
            <span className="font-mono text-success">
              R$ {item.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
            <span className="mx-6 text-background-light">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;