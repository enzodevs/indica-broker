export interface BrokerData {
    id: string;
    title: string;
    logoUrl: string;
    returnValue: number;
    progressValue: number;
    link: string;
  }
  
  export interface TradeData {
    id: string;
    pair: string;
    progressValue: number;
    trend: 'up' | 'down';
  }
  
  export interface WinnerData {
    id: string;
    username: string;
    amount: number;
    timestamp: Date;
  }
  
  export interface TickerData {
    id: string;
    maskedUsername: string;
    amount: number;
  }
  
  class DataGenerator {
    private static tradingPairs = [
      'EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF',
      'AUD/USD', 'USD/CAD', 'NZD/USD', 'EUR/GBP',
      'EUR/JPY', 'GBP/JPY'
    ];
  
    private static brokers = [
      { title: 'Alpha Trade', link: '#' },
      { title: 'Beta Markets', link: '#' },
      { title: 'Gamma Exchange', link: '#' },
      { title: 'Delta Trading', link: '#' },
      { title: 'Epsilon Forex', link: '#' },
      { title: 'Zeta Invest', link: '#' },
      { title: 'Eta Partners', link: '#' },
      { title: 'Theta Capital', link: '#' },
      { title: 'Iota Markets', link: '#' },
      { title: 'Kappa Trade', link: '#' },
    ];
  
    static generateProgress(): number {
      return Math.floor(Math.random() * 98) + 1; // 1-99
    }
  
    static generateAmount(): number {
      return Number((Math.random() * 9900 + 100).toFixed(2)); // 100-10000
    }
  
    static maskUsername(username: string): string {
      const last4 = username.slice(-4);
      const maskedPart = '*'.repeat(username.length - 4);
      return maskedPart + last4;
    }
  
    static generateRandomUsername(): string {
      const prefix = 'user';
      const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
      return prefix + randomNum;
    }
  
    static generateBrokerData(): BrokerData[] {
      return this.brokers.map((broker, index) => ({
        id: `broker-${index}`,
        title: broker.title,
        logoUrl: `/brokers/logo-${index + 1}.svg`, // You'll need to add these logos
        returnValue: this.generateProgress(),
        progressValue: this.generateProgress(),
        link: broker.link
      })).sort((a, b) => b.progressValue - a.progressValue);
    }
  
    static generateTradeData(): TradeData[] {
      return this.tradingPairs.map((pair, index) => ({
        id: `trade-${index}`,
        pair,
        progressValue: this.generateProgress(),
        trend: Math.random() > 0.5 ? 'up' as 'up' : 'down' as 'down'
      })).sort((a, b) => b.progressValue - a.progressValue);
    }
  
    static generateWinnerData(count: number = 10): WinnerData[] {
      return Array.from({ length: count }, (_, index) => ({
        id: `winner-${index}`,
        username: this.generateRandomUsername(),
        amount: this.generateAmount(),
        timestamp: new Date(Date.now() - Math.random() * 3600000)
      })).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    }
  
    static generateTickerData(count: number = 20): TickerData[] {
      return Array.from({ length: count }, (_, index) => ({
        id: `ticker-${index}`,
        maskedUsername: this.maskUsername(this.generateRandomUsername()),
        amount: this.generateAmount()
      }));
    }
  }
  
  export default DataGenerator;