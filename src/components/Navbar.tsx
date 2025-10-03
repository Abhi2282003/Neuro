"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./Theming/mode-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Contributors from "./Contributors";
import { Badge } from "./ui/badge";
import { useTheme } from "next-themes";

const Navbar = ({ isDisplay }: { isDisplay: boolean }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent hydration mismatch, we wait until the component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until the component is mounted
  }

  // Determine the current theme (dark/light)
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <div className="top-0 md:left-0 md:right-0 flex backdrop-blur-sm justify-center py-[10px] border-b border-g items-center font-bold z-50">
        <div className="flex w-full max-w-screen mx-2 md:mx-4 justify-between items-center">
          <div className="flex flex-row gap-2 items-center group">
            <Link href="https://neuroguardian.lovable.app/">
              <div className="font-rancho font-bold text-2xl duration-300 pl-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text ">
                NeuroGuardian
              </div>
            </Link>
           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
