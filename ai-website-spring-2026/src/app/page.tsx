// src/app/page.tsx
"use client";
// import Image from "next/image";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Assignments from "./components/Assignments";
import Lectures from "./components/Lectures";
import Staff from "./components/Staff";
import Calendar from "./components/Calendar";
import Discussion from "./components/Discussion";
import Resources from "./components/Resources";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* Spacer so content isn't hidden under fixed navbar */}
      <div className="h-16" />

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
        <section id="top">
            <Top/>
        </section>

        {/* Assignments (homeworks and final project) */}
        <section id="assignments">
            <Assignments/>
        </section>

        {/* Staff (Professor, HTAs, UTA-STAs, UTAs)*/}
        <section id="staff">
            <Staff/>
        </section>

        {/* Lectures */}
        <section id="lectures">
            <Lectures/>
        </section>

        {/* Calendar */}
        <section id="calendar">
            <Calendar/>
        </section>

        {/* Discussion */}
        <section id="discussion">
            <Discussion/>
        </section>

        {/* Resources */}
        <section id="resources">
            <Resources/>
        </section>

      </div>
    </main>
  );
}