import React, { useState, useEffect } from 'react';

interface TimerProps {
  onComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    // Initialize timer to next hour
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
    setTimeLeft(nextHour.getTime() - now.getTime());

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1000) {
          // Reset timer and trigger update
          const newNextHour = new Date();
          newNextHour.setHours(newNextHour.getHours() + 1, 0, 0, 0);
          onComplete();
          return newNextHour.getTime() - Date.now();
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="font-mono text-primary text-xl">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

export default Timer;