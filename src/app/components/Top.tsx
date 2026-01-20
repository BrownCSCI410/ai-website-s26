import Image from "next/image";
import { useRef } from "react";
import { PREFIX } from "./prefix";

// hog rider mascot and course introduction
export default function Top() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
  
    const playSound = () => {
      if (!audioRef.current) {
        audioRef.current = new Audio(`${PREFIX}hog_rider_sound.mp3`);
      }
  
      audioRef.current.currentTime = 0; // rewind if spam-clicked
      audioRef.current.play();
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
          <div 
            className="flex flex-col md:flex-row items-center justify-center w-full"
            style={{ gap: "80px" }}
          >
            {/* LEFT: Mascot */}
            <div
              className="flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
              onClick={playSound}
              title="HOG RIDAAAAA"
              >
              
              <Image
                src={`${PREFIX}clash_cards/hog_rider_with_feet_no_bg.png`}
                alt="Course mascot"
                width={380}
                height={380}
                priority
                className="drop-shadow-2xl"
              />
            </div>

            {/* RIGHT: Text Box */}
            <div 
              className="p-8 rounded-[26px] border border-white/20 bg-blue-900/60 backdrop-blur-md shadow-2xl"
              style={{ maxWidth: "550px" }}
            >
              <div className="mb-4">
                <Image
                  src={`${PREFIX}logop.png`}
                  alt="course logo"
                  width={380}
                  height={100} // Increased height slightly to avoid squishing
                  priority
                />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 uppercase tracking-wide">
                Foundations of AI and Machine Learning
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed opacity-90">
                Welcome to CS410/1411! This course offers broad coverage of core topics in 
                artificial intelligence (AI) as a prelude to students taking more in-depth 
                AI courses later on. Throughout the course, you will study key AI 
                models, reinforcement learning, and both supervised and unsupervised 
                machine learning to build socially responsible AI.
              </p>
              <br/>
              <p className="text-base md:text-lg font-medium leading-relaxed opacity-90">
                Instructor: Prof. Serena Booth
              </p>
            </div>
          </div>
        </section>
    );
}
