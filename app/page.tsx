'use client';

import React, { useState, useCallback } from 'react';
import Header from '../components/layout/Header';
import Ticker from '../components/layout/Ticker';
import Banner from '../components/layout/Banner';
import BrokerCarousel from '../components/dashboard/BrokerCarousel';
import WinnersSection from '../components/dashboard/WinnersSection';
import TradeCarousel from '../components/dashboard/TradeCarousel';

export default function Home() {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const handleTimerComplete = useCallback(() => {
    setLastUpdate(new Date());
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header onTimerComplete={handleTimerComplete} />
      <Ticker />
      <div className="py-8">
        <Banner 
          imageUrl="/banner.svg"
          redirectUrl="#"
        />
      </div>
      <BrokerCarousel />
      <WinnersSection />
      <TradeCarousel />
    </main>
  );
}