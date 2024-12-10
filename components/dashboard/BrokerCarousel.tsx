import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BrokerCard from './BrokerCard';
import DataGenerator from '../../utils/dataGenerator';

const BrokerCarousel: React.FC = () => {
  const [brokers, setBrokers] = useState(DataGenerator.generateBrokerData());
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
    loop: false,
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, brokers]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        Top Brokers
      </h2>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {brokers.map((broker) => (
            <div 
              key={broker.id} 
              className="flex-[0_0_280px] min-w-0 pl-4 first:pl-0"
            >
              <BrokerCard broker={broker} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrokerCarousel;