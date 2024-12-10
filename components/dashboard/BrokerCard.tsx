import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BrokerData } from '../../utils/dataGenerator';

interface BrokerCardProps {
  broker: BrokerData;
}

const BrokerCard: React.FC<BrokerCardProps> = ({ broker }) => {
  return (
    <Link 
      href={`/broker/${broker.id}`}
      className="block w-full max-w-[280px] bg-background-light rounded-lg p-4 hover:bg-background-dark transition-colors"
    >
      <div className="relative h-12 mb-4">
        <Image
          src={broker.logoUrl}
          alt={broker.title}
          fill
          className="object-contain"
        />
      </div>
      
      <h3 className="text-white font-semibold mb-2 text-center">
        {broker.title}
      </h3>
      
      <div className="text-primary text-center mb-3">
        <span className="text-2xl font-bold">
          {broker.returnValue}%
        </span>
        <span className="text-sm ml-1 text-white/70">today</span>
      </div>
      
      <div className="relative h-2 bg-background rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-success to-primary transition-all duration-500 ease-out"
          style={{ 
            width: `${broker.progressValue}%`,
            '--progress-width': `${broker.progressValue}%` 
          } as React.CSSProperties}
        />
      </div>
      
      <div className="text-right mt-1">
        <span className="text-white/70 text-sm">
          {broker.progressValue}% complete
        </span>
      </div>
    </Link>
  );
};

export default BrokerCard;