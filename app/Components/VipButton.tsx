"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const slideInFromBottom = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const VipButton: React.FC = () => {
  return (
    <motion.div
      variants={slideInFromBottom}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      {/* Scroll to the VipSignup section when the button is clicked */}
      <Link to="VipSignup" smooth={true} duration={500}>
        <button className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition">
          Become a VIP
        </button>
      </Link>
    </motion.div>
  );
};

export default VipButton;
