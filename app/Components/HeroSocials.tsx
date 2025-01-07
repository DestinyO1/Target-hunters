"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const HeroSocials: React.FC = () => {
  const socials = [
    { href: "https://www.instagram.com/targethuntersofficial?igsh=MTRlaW0ydnk3dG1weQ==", src: "/Socials/instagram.png", alt: "Instagram" },
    { href: "https://www.tiktok.com/@targethuntersofficial?_t=ZG-8soaZu0m0n3&_r=1", src: "/Socials/tiktok.png", alt: "TikTok" },
    { href: "https://x.com/klcryptox?s=21", src: "/Socials/twitter.png", alt: "Twitter" },
    { href: "https://discord.gg/ScZex3qhT6", src: "/Socials/discord.png", alt: "Discord" },
  ];

  return (
    <motion.div
      variants={slideInFromRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center gap-6 bg-white p-4 rounded-md shadow-md">
        {socials.map((social, index) => (
          <Link key={index} href={social.href}>
            <Image
              alt={social.alt}
              src={social.src}
              quality={100}
              width={30}
              height={30}
              className="hover:scale-110 transition-transform duration-200"
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroSocials;
