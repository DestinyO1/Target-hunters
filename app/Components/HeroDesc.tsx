"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const HeroDesc: React.FC = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      className="text-center px-4"
    >
      <h1 className="text-black text-3xl md:text-5xl font-bold">
        #1 Trading And Learning Community For
        <span className="text-red-500 block md:inline text-xl md:text-2xl">
          Crypto, Stocks, And Forex
        </span>
      </h1>
    </motion.div>
  );
};

export default HeroDesc;
