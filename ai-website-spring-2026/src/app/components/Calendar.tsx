import React from 'react';

export default function CourseCalendar() {
    const CALENDAR_URL = "https://calendar.google.com/calendar/embed?src=c_01bfec7117962043525be2bce38a1f001fadcfcb2541bdd33d8a28c198ef3b2a%40group.calendar.google.com&ctz=America%2FNew_York";

    return (
        <section className="py-20">
            {/* Same container styling as Lectures.tsx for consistency */}
            <div className="p-10 rounded-[26px] border border-white/10 bg-blue-900/60 backdrop-blur-sm">
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