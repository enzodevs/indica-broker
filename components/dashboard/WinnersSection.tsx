import React, { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import WinnerCard from './WinnerCard';
import DataGenerator from '../../utils/dataGenerator';

const WinnersSection: React.FC = () => {
  const [winners, setWinners] = useState(DataGenerator.generateWinnerData());
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, winners]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Latest Winners
      </h2>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {winners.map((winner) => (
            <div 
              key={winner.id} 
              className="flex-[0_0_280px] min-w-0 pl-4 first:pl-0"
            >
              <WinnerCard winner={winner} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinnersSection;