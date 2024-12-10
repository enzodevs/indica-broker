import React from 'react';
import Timer from '../shared/Timer';
import Image from 'next/image';

interface HeaderProps {
  onTimerComplete: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTimerComplete }) => {
  return (
    <header className="w-full bg-background-dark py-4 px-6 flex items-center justify-between border-b border-background-light">
      <div className="w-24 invisible">
        {/* Empty div for flex spacing */}
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-12">
          <Image
            src="/logo.svg"
            alt="Indica Broker"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="w-24 flex justify-end">
        <Timer onComplete={onTimerComplete} />
      </div>
    </header>
  );
};

export default Header;