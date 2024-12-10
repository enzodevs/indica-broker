import React from 'react';
import { WinnerData } from '../../utils/dataGenerator';

interface WinnerCardProps {
  winner: WinnerData;
}

const WinnerCard: React.FC<WinnerCardProps> = ({ winner }) => {
  return (
    <div className="bg-background-light rounded-lg p-4 w-full max-w-[280px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/70 text-sm">
          {new Date(winner.timestamp).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
        <span className="text-primary text-sm font-mono">
          #{winner.id.split('-')[1]}
        </span>
      </div>
      
      <div className="text-white font-mono mb-2">
        {winner.username}
      </div>
      
      <div className="text-success text-xl font-bold">
        R$ {winner.amount.toLocaleString('pt-BR', { 
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </div>
    </div>
  );
};

export default WinnerCard;