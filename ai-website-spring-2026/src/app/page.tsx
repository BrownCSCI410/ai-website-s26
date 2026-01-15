// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/bg-arena.jpg")' }}
        aria-hidden="true" 
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 min-h-screen flex items-center justify-center">
        
        {/* Flex Row: Centers everything. 
            Style 'gap' ensures the spacing between image and text. */}
        <div 
          className="flex flex-col md:flex-row items-center justify-center w-full"
          style={{ gap: "80px" }} 
        >
          
          {/* LEFT: Mascot (Centered in its own space) */}
          <div className="flex-shrink-0">
            <Image
              src="/hog_rider.png"
              alt="Course mascot"
              width={380}
              height={380}
              priority
              className="drop-shadow-2xl"
            />
          </div>

          {/* RIGHT: Text Box (Limited width for readability) */}
          <div 
            className="p-8 rounded-[26px] border border-white/20 bg-blue-900/60 backdrop-blur-md shadow-2xl"
            style={{ maxWidth: "550px" }}
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
              CSCI 0410
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">
              Foundations of AI and Machine Learning
            </h2>
            <p className="text-base md:text-lg font-medium leading-relaxed opacity-90">
              Welcome to CS410/1411! This course offers broad coverage of core topics in 
              artificial intelligence (AI) as a prelude to students taking more in-depth 
              AI courses later on. Throughout the course, you will delve into key AI 
              models, reinforcement learning, and both supervised and unsupervised 
              machine learning to build socially responsible AI.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}