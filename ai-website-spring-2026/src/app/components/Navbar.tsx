"use client"; // <--- 1. Required for interactivity (useState)

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  // 2. State to track if hamburger menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logop.png"
            alt="Course Logo"
            width={200}
            height={200}
            className="w-auto h-10 object-contain" // Ensures logo fits nicely
          />
        </div>

        {/* --- DESKTOP MENU --- 
            hidden on mobile (default), flex on medium screens (md:flex) 
        */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <a href="#top" className="hover:text-pink-400 transition">About</a>
          <a href="#assignments" className="hover:text-pink-400 transition">Assignments</a>
          <a href="#staff" className="hover:text-pink-400 transition">Staff</a>
          <a href="#lectures" className="hover:text-pink-400 transition">Lectures</a>
          <a href="#calendar" className="hover:text-pink-400 transition">Hours</a>
          <a href="#discussion" className="hover:text-pink-400 transition">Discussion</a>
        </nav>

        {/* --- HAMBURGER BUTTON --- 
            visible on mobile (default), hidden on medium screens (md:hidden) 
        */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {/* Toggle Icon based on isOpen state */}
          {isOpen ? (
            // X Icon (Close)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon (Open)
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN --- 
          Only renders if isOpen is true.
      */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 absolute top-16 left-0 w-full">
          <nav className="flex flex-col items-center py-6 gap-6 text-white font-medium text-lg">
            <a href="#top" onClick={closeMenu} className="hover:text-pink-400 transition">About</a>
            <a href="#assignments" onClick={closeMenu} className="hover:text-pink-400 transition">Assignments</a>
            <a href="#staff" onClick={closeMenu} className="hover:text-pink-400 transition">Staff</a>
            <a href="#lectures" onClick={closeMenu} className="hover:text-pink-400 transition">Lectures</a>
            <a href="#calendar" onClick={closeMenu} className="hover:text-pink-400 transition">Hours</a>
            <a href="#discussion" onClick={closeMenu} className="hover:text-pink-400 transition">Discussion</a>
          </nav>
        </div>
      )}
    </header>
  );
}