import React from 'react';
import { PREFIX } from "./prefix";
import { useRef } from 'react';

type resourceProps = {
    resourceName: string
    href: string
}

function Resource({resourceName, href} : resourceProps) {
    return (
        <div className="p-4 rounded-[20px] border border-white/10 bg-black/40 backdrop-blur-sm w-fit">
            <a href={href} target="_blank" rel="noopener noreferrer"
                className="text-yellow-400 text-center hover:text-yellow-300 underline decoration-yellow-400/30 hover:decoration-yellow-300 transition-all font-medium">
                <p className="">{resourceName}</p>
            </a>
        </div>
    );
}

export default function Resources() {
    const resourceGroupHeaderStyle = "text-xl font-bold text-center text-yellow-400 uppercase tracking-wider pt-8 pb-3";
    const resourceGroupStyle = "flex flex-wrap flex-row items-center justify-center gap-2";

    const audioRef = useRef<HTMLAudioElement | null>(null);
          
    const playSound = () => {
        if (!audioRef.current) {
        audioRef.current = new Audio(`${PREFIX}he_he_he_ha.mp3`);
        }
    
        audioRef.current.currentTime = 0; 
        audioRef.current.play();
    };

    return (
        <section className="py-20">
            <div className="relative p-10 rounded-[26px] border border-white/10 bg-blue-900/60 backdrop-blur-sm">
                
                {/* === TOP LEFT IMAGE === */}
                <img 
                    src={`${PREFIX}kings_clapping.png`} 
                    alt="Left Decoration"
                    className="hidden md:block absolute bottom-full left-0 w-72 h-auto object-contain mb-[-1px] translate-y-60" 
                />

                <div
                    className=""
                    onClick={playSound}
                    title="he he he ha"
                >
                    {/* === TOP RIGHT IMAGE === */}
                    <img 
                        src={`${PREFIX}kings_cheering.png`}
                        alt="Right Decoration"
                        className="hidden md:block absolute bottom-full right-0 w-72 h-auto object-contain mb-[-1px] translate-y-64" 
                    />
                </div>
                
                {/* === BUBBLE HEADER === */}
                <div className="flex justify-center mb-6">  
                    <h3 className="text-3xl font-bold px-12 py-4 text-white rounded-full border border-white/20 bg-black/50 backdrop-blur-md shadow-lg">
                        Resources
                    </h3>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>Course Policies</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Course Missive" href="https://hackmd.io/eFzIAJmCTtW0fUGJ4w5xOg"/>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>General Resources</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Ed Discussion" href="https://edstem.org/us/courses/93617/discussion"/>
                    <Resource resourceName="Github Overview" href="https://hackmd.io/@cs410/ry3PhMEtC"/>
                    <Resource resourceName="Testing/Debugging Guide" href="https://hackmd.io/@cs410/SyDy2CVnA"/>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>Python Guides</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Python Installation and Setup" href="https://hackmd.io/@cs410/BJvhqHXuR"/>
                    <Resource resourceName="Python, NumPy, & Linear Algebra Guide" href="https://csci1410-2023.vercel.app/static/media/python_numpy_guide.f0074ca121c542ff1c29.pdf"/>
                    <Resource resourceName="NumPy Cheatsheet" href="https://drive.google.com/file/d/1ROnkNuHgthapJIXYJBtx1W_WYHfHBKfQ/view"/>
                    <Resource resourceName="Python Style Guide" href="https://hackmd.io/@cs410/BJDNYaUKA"/>
                </div>

                <h2 className={`${resourceGroupHeaderStyle}`}>Forms</h2>
                <div className={`${resourceGroupStyle}`}>
                    <Resource resourceName="Course Onboarding Form" href="https://docs.google.com/forms/d/e/1FAIpQLSceHCYVQGeARm-ylTWtCq_gDJC-g2R2YGfacZyq9mNWiakhBA/viewform"/>
                </div>
            </div>
        </section>
    );
}