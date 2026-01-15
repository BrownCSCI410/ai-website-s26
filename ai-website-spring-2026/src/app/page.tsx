// src/app/page.tsx
import Image from "next/image";
import Top from "./Top";
import Assignments from "./Assignments";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background Layer - Changed to fixed so it stays put while you scroll */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/bg-arena.jpg")' }}
        aria-hidden="true" 
      />
      <div className="fixed inset-0 z-10 bg-black/30" aria-hidden="true" />

      {/* Main Content Wrapper */}
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        
        {/* Top: hog rider mascot and course introduction */}
        <Top/>

        {/* SECTION 2: NEW CONTENT (Added below) */}
        <Assignments/>

      </div>
    </main>
  );
}