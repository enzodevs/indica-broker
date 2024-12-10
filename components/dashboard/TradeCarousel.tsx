import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import TradeCard from './TradeCard';
import DataGenerator from '../../utils/dataGenerator';

const TradeCarousel: React.FC = () => {
  const [trades, setTrades] = useState(DataGenerator.generateTradeData());
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, trades]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Trending Trades
      </h2>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {trades.map((trade) => (
            <div 
              key={trade.id} 
              className="flex-[0_0_280px] min-w-0 pl-4 first:pl-0"
            >
              <TradeCard trade={trade} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradeCarousel;