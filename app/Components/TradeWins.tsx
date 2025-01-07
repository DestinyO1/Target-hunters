import React from 'react';
import Image from 'next/image';

const TradeWins = () => {
  // Array of image objects with src and alt properties
  const images = [
    { src: '/Display/win1.jpg', alt: 'Trade Win 1' },
    { src: '/Display/win2.jpg', alt: 'Trade Win 2' },
    { src: '/Display/win3.jpg', alt: 'Trade Win 3' },
    { src: '/Display/win4.jpg', alt: 'Trade Win 4' },
    { src: '/Display/win5.jpg', alt: 'Trade Win 5' },
    { src: '/Display/win6.jpg', alt: 'Trade Win 6' },
    { src: '/Display/win7.jpg', alt: 'Trade Win 7' },
    { src: '/Display/win8.jpg', alt: 'Trade Win 8' },
    { src: '/Display/win9.png', alt: 'Trade Win 9' },
  ];

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-40">
          <Image
            src={image.src}
            alt={image.alt}
            fill// Makes the image fill its parent container
             // Ensures the image maintains its aspect ratio
            className="rounded-md shadow-lg object-left object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default TradeWins;
