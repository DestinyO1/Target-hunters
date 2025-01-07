import React from 'react';
import Image from 'next/image';



const DiscordCalls = () => {
  // Array of image objects with src and alt properties
  const images = [
    { src: '/Display/call1.png', alt: 'Discord Call 1' },
    { src: '/Display/call2.png', alt: 'Discord Call 2' },
    { src: '/Display/call3.png', alt: 'Discord Call 3' },
    { src: '/Display/call4.png', alt: 'Discord Call 4' },
    { src: '/Display/call5.png', alt: 'Discord Call 5' },
    { src: '/Display/call6.png', alt: 'Discord Call 6' },
     { src: '/Display/call7.png', alt: 'Discord Call 7' },
     { src: '/Display/call8.png', alt: 'Discord Call 8' },
     { src: '/Display/call9.png', alt: 'Discord Call 9' },
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

export default DiscordCalls;