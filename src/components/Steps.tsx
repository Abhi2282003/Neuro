"use client";

import React from "react";

type HeroSectionProps = {
  isDeviceConnected: boolean;
  isSerial: boolean;
  isLoading: boolean;
  connectToDevice: () => void;
  disconnect: () => void;
  disconnectDevice: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  isDeviceConnected,
  isSerial,
  isLoading,
  connectToDevice,
  disconnect,
  disconnectDevice,
}) => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-transparent">
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
        NeuroGuardian  helps you track, monitor, and improve your brain health
        with real-time EEG insights, wellness tools, and cognitive support.
      </p>
    </section>
  );
};

export default HeroSection;
