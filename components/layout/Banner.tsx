import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BannerProps {
  imageUrl?: string;
  redirectUrl: string;
}

const Banner: React.FC<BannerProps> = ({ 
  imageUrl = '/banner.svg',
  redirectUrl = '#'
}) => {
  return (
    <Link 
      href={redirectUrl}
      className="block w-full max-w-7xl mx-auto p-4 transition-transform hover:scale-[1.02]"
    >
      <div className="relative w-full h-[200px] md:h-[300px] rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt="Promotional Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>
    </Link>
  );
};

export default Banner;