import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-8">
      {/* Main Title */}
      <motion.h1 
        className="text-5xl font-extrabold text-blue-800 mb-6 text-center leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-pink-600">SHEsafe</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-gray-700 text-lg text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Your trusted personal safety companion. Empowering women with real-time emergency alerts, anonymous harassment reporting, self-defense resources, and a supportive community — all at your fingertips.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 bg-white text-pink-600 border-2 border-pink-600 rounded-full hover:bg-pink-50 transition">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
