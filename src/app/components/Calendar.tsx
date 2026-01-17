import React from 'react';
import { PREFIX } from "./prefix";

export default function CourseCalendar() {
    const CALENDAR_URL = "https://calendar.google.com/calendar/embed?src=c_01bfec7117962043525be2bce38a1f001fadcfcb2541bdd33d8a28c198ef3b2a%40group.calendar.google.com&ctz=America%2FNew_York";

    return (
        <section className="py-20">
            {/* 1. Added 'relative' here so the image sticks to this box */}
            <div className="relative p-10 rounded-[26px] border border-white/10 bg-blue-900/60 backdrop-blur-sm">
                
                {/* ----------------- TOP LEFT IMAGE ----------------- */}
                <img 
                    src={`${PREFIX}Royal_Giant.png`}
                    alt="Calendar Decoration"
                    // 'bottom-full': Puts it on top of the box
                    // 'left-0': Aligns it to the LEFT side
                    // 'mb-[-1px]': Ensures it touches the border perfectly
                    className="absolute bottom-full left-0 w-90 h-auto object-contain mb-[-1px] translate-y-6" 
                />
                {/* -------------------------------------------------- */}

                <h3 className="text-3xl font-bold mb-6 text-center text-white">Course Calendar</h3>
                
                {/* Calendar Wrapper */}
                <div className="w-full h-[800px] rounded-xl overflow-hidden border border-white/20 bg-white">
                    <iframe 
                        src={CALENDAR_URL} 
                        style={{ border: 0 }} 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        scrolling="no"
                        title="Course Calendar"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}