// VipButton.js

"use client";

import React from "react";
import { motion } from "framer-motion";

const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const VipButton: React.FC = () => {
  const handleButtonClick = () => {
    // Get the top position of the VipSignup element
    const vipSignupElement = document.getElementById('vip-signup');
    if (vipSignupElement) {
      vipSignupElement.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <motion.div
      variants={slideInFromBottom}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <button 
        className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
        onClick={handleButtonClick} 
      >
        Become a VIP
      </button>
    </motion.div>
  );
};

export default VipButton;

