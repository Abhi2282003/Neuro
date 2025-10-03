"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-[#0B0F14] via-[#0B0F14] to-[#0B0F14]">
      
      {/* Top Tag */}
      <div className="mb-6">
        <span className="px-6 py-2 text-sm md:text-lg font-semibold text-cyan-400 border border-cyan-400 rounded-full shadow-lg">
          🌐 AI-Powered Neurological Wellness Platform
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
        Your Complete
        <br />
        Brain Health Companion
      </h1>

      {/* Tagline */}
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
        NeuroGuardian helps you track, monitor, and improve your brain health 
        with real-time EEG insights, wellness tools, and cognitive support.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl shadow-lg transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
