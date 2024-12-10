import React from 'react';
import { TradeData } from '../../utils/dataGenerator';

interface TradeCardProps {
  trade: TradeData;
}

const TradeCard: React.FC<TradeCardProps> = ({ trade }) => {
  return (
    <div className="bg-background-light rounded-lg p-4 w-full max-w-[280px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold text-xl">
          {trade.pair}
        </h3>
        <span className={`text-sm ${trade.trend === 'up' ? 'text-success' : 'text-danger'}`}>
          {trade.trend === 'up' ? '↑' : '↓'}
        </span>
      </div>
      
      <div className="relative h-2 bg-background rounded-full overflow-hidden mb-2">
        <div 
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-danger to-success transition-all duration-500 ease-out"
          style={{ 
            width: `${trade.progressValue}%`,
            '--progress-width': `${trade.progressValue}%` 
          } as React.CSSProperties}
        />
      </div>
      
      <div className="text-right">
        <span className="text-white/70 text-sm">
          Success rate: {trade.progressValue}%
        </span>
      </div>
    </div>
  );
};

export default TradeCard;