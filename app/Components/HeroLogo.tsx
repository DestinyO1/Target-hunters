import Image from 'next/image';

const HeroLogo = () => {
  return (
    <div className="h-32 w-32 mx-auto md:h-40 md:w-40">
      <Image 
        src="/Display/THlogo1.png" 
        alt="logo" 
        width={160} // Adjust width based on your layout
        height={160} // Adjust height based on your layout
        className="object-contain"
      />
    </div>
  );
};

export default HeroLogo;
