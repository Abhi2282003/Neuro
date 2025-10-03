"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./Theming/mode-toggle";

const Navbar = ({ isDisplay }: { isDisplay: boolean }) => {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-sm border-b border-white/10">
      <div className="mx-2 md:mx-4 flex h-[56px] max-w-screen items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link href="https://neuroguardian.lovable.app/student">
            <span className="font-bold text-3xl bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
              NeuroGuardian
            </span>
          </Link>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <ModeToggle disabled={!isDisplay} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
