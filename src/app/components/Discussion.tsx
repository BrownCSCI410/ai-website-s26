import React from 'react';
import { PREFIX } from "./prefix";

type DiscussionProps = {
    topic: string;
    date: string;
    slidesLink?: string;
    quiz?: string;
}

const DISCUSSION_DATA = [
    { topic: "AI Policy", date: "2/2 - 2/6", link: "https://docs.google.com/presentation/d/1UqgWN4X2xrJzTaL2lTbZkFByhlmaBdov8xk1EhA1RPA/edit?usp=sharing" },
    { topic: "HW 1 and 2", date: "2/9 - 2/13", link: "https://docs.google.com/presentation/d/1jqIHQsJzKm6iC-IIIoVKTtuonx-5bslh5YlRunVlQw8/edit?usp=sharing", quiz: "https://docs.google.com/document/d/1WuEmw4uMvogcjiS7eStASslrZG89-N3Ev9wgWhXiIqI/edit?usp=sharing"},
    { topic: "Bias in Data", date: "2/23 - 2/27", link: "https://docs.google.com/presentation/d/1JWXv3U4M9M0Pnt290wR1TgHJJZyNULypHTbNho0gEdk/edit?usp=sharing" },
    { topic: "HW 3 and 4", date: "3/2 - 3/6", link: "https://docs.google.com/presentation/d/1lce1FgabbKskdzPpApQZkwJXmPbecRannUg2m9WPo8k/edit?usp=sharing" , quiz: "https://docs.google.com/document/d/1sRfMfUYfluL9zbi4VdJcxBfoa-1GKjkoH2j8vrjR1Wg/edit?usp=sharing"},
    { topic: "Automated Decision-Making", date: "3/9 - 3/13", link: "https://docs.google.com/presentation/d/1N3tyXpi5mwsPr5ZaCB40VKReWrTOHbeXve002kLxmaE/edit?usp=sharing" },
    { topic: "HW 5 and 6", date: "3/16 - 3/20", link: "https://docs.google.com/presentation/d/1Qmm8IgYsUuKhrSd16298VFsTj6owaSVIq_hmE-KF-Ws/edit?usp=sharing", quiz: "https://docs.google.com/document/d/1SMe8m3d4lzRJRtLNfJs4woY5VcgbdBsZXcXaMEoErc0/edit?usp=sharing" },
    { topic: "AI Innovation: Accels vs. Decels", date: "3/30 - 4/3", link: "https://docs.google.com/presentation/d/1LKs9eF8ndhtEdj_rSQeuabKWFqWHpq1ZB4euuej5b0A/edit?slide=id.p#slide=id.p" },
    { topic: "Aggregation Bias/Fairness", date: "4/6 - 4/10", link: "https://docs.google.com/presentation/d/1P-6gAdqFN4b4eRSlAJv3DQf2DyjkeMK2MdaILrP6wy8/edit?usp=sharing" },
    { topic: "HW 7, 8 and 9", date: "4/13 - 4/17", link: "https://docs.google.com/presentation/d/1WgIxmlla68hl5Ck4aO9FdAimBSwa4rrHKgiIdzL_kDk/edit?usp=sharing", quiz: "https://docs.google.com/document/d/1f7l6a-IVq_qmXmJMkPP8fuarrk6UZCy5SuTgzRYn4Cw/edit?usp=sharing" },
];


function DiscussionRow({ topic, date, slidesLink, quiz }: DiscussionProps) {
    return (
        <tr className="hover:bg-white/5 transition-colors group">
            {/* Added md:px-6 to reduce padding on mobile */}
            <td className="px-3 py-4 md:px-6 font-medium text-white group-hover:text-yellow-200">
                {topic}
            </td>
            <td className="px-3 py-4 md:px-6 text-white/70">
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
            <td className="px-3 py-4 md:px-6 text-white/70">
                {quiz ? (
                    <a 
                        href={quiz} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 underline decoration-yellow-400/30 hover:decoration-yellow-300 transition-all font-medium"
                    >
                        Quiz
                    </a>
                ) : (
                    <span className="opacity-50 cursor-not-allowed">Quiz</span>
                )}
            </td>
            <td className="px-3 py-4 md:px-6 text-white/70 tabular-nums text-right whitespace-nowrap">
                {date}
            </td>
        </tr>
    );
}

export default function Discussions() {
    return (
        <section className="py-20">
            {/* 1. Changed p-10 to 'p-4 md:p-10' (More space for table on mobile)
               2. Added overflow-hidden to clip corners properly
            */}
            <div className="relative p-4 md:p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden md:overflow-visible">
                
                {/* === DECORATION IMAGES === 
                    Added 'hidden md:block' to hide these on mobile, 
                    as they often overlap text on small screens. 
                    Remove 'hidden' if you want them to stay. 
                */}
                <img 
                    src={`${PREFIX}archer.png`} 
                    alt="Left Decoration"
                    className="hidden md:block absolute bottom-full left-0 w-32 h-auto object-contain mb-[-1px]" 
                />

                <img 
                    src={`${PREFIX}goblin_running.png`}
                    alt="Right Decoration"
                    className="hidden md:block absolute bottom-full right-20 w-50 h-auto object-contain mb-[-1px]" 
                />

                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Discussion Sections</h3>
                
                {/* === SCROLL WRAPPER === 
                    This div allows the table to scroll sideways if it gets too wide 
                */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[300px]">
                        <thead>
                            <tr className="border-b border-white/20 bg-white/5">
                                {/* Reduced padding on headers for mobile (px-3) */}
                                <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Topic</th>
                                <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Materials</th>
                                <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm text-right">Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {DISCUSSION_DATA.map((item, index) => (
                                <DiscussionRow
                                    key={`${item.topic}-${index}`}
                                    topic={item.topic}
                                    date={item.date}
                                    slidesLink={item.link}
                                    quiz={item.quiz}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
