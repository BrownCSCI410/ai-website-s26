import React from 'react';

type DiscussionProps = {
    topic: string;
    date: string;
    slidesLink?: string;
}

// UPDATE the "link" fields below with actual PDF/Slide URLs
const DISCUSSION_DATA = [
    { topic: "Ai Policy", date: "2/2 - 2/6", link: "#" },
    { topic: "HW 1 and 2", date: "2/9 - 2/13", link: "#" },
    { topic: "SRC - TBD", date: "2/23 - 2/27", link: "#" },
    { topic: "HW 3 and 4", date: "2/2 - 2/6", link: "#" },
    { topic: "SRC - TBD", date: "2/9 - 2/13", link: "https://www.youtube.com/watch?v=4Jdp_dkduJc" },
    { topic: "HW 5 and 6", date: "2/16 - 2/20", link: "https://www.youtube.com/watch?v=TJryIc0Cwy4" },
    { topic: "SRC - TBD", date: "3/30 - 4/3", link: "https://www.youtube.com/watch?v=vv8MI_y1Lsg" },
    { topic: "SRC - TBD", date: "4/6 - 4/10", link: "https://www.youtube.com/watch?v=XH3Xu1-cvII" },
    { topic: "HW 7, 8 and 9", date: "4/13 - 4/17", link: "https://www.youtube.com/watch?v=kqhtEpXoOwcI" },
];

function DiscussionRow({ topic, date, slidesLink }: DiscussionProps) {
    return (
        <tr className="hover:bg-white/5 transition-colors group">
            {/* Column 1: Topic */}
            <td className="px-6 py-4 font-medium text-white group-hover:text-yellow-200">
                {topic}
            </td>
            
            {/* Column 2: Slides (Clickable) */}
            <td className="px-6 py-4 text-white/70">
                {slidesLink ? (
                    <a 
                        href={slidesLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 underline decoration-yellow-400/30 hover:decoration-yellow-300 transition-all font-medium"
                    >
                        Slides
                    </a>
                ) : (
                    <span className="opacity-50 cursor-not-allowed">Slides</span>
                )}
            </td>

            {/* Column 3: Date */}
            <td className="px-6 py-4 text-white/70 tabular-nums text-right whitespace-nowrap">
                {date}
            </td>
        </tr>
    );
}

export default function Discussions() {
    return (
        <section className="py-20">
            {/* Container matching Lectures.tsx style */}
            <div className="p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-6 text-center text-white">Discussion Sections</h3>
                
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/20 bg-white/5">
                            <th className="px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Topic</th>
                            <th className="px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Materials</th>
                            <th className="px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm text-right">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {DISCUSSION_DATA.map((item, index) => (
                            <DiscussionRow
                                key={`${item.topic}-${index}`}
                                topic={item.topic}
                                date={item.date}
                                slidesLink={item.link}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}