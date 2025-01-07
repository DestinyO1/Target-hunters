import React from "react";
import VipButton from "./VipButton";
import HeroDesc from "./HeroDesc";
import HeroLogo from "./HeroLogo";
import HeroSocials from "./HeroSocials";

const Hero = () => {
  return (
    <div className="h-screen w-full grid place-items-center bg-gradient-to-b from-white to-red-50">
      <div className="w-11/12 max-w-5xl text-center space-y-8 lg:space-y-16 grid lg:grid-cols-2 items-center">
        <HeroLogo />
        <HeroDesc />
        <div className="flex flex-col gap-6 items-center lg:col-span-2">
          <VipButton />
          <HeroSocials />
        </div>
      </div>
    </div>
  );
};

export default Hero;
