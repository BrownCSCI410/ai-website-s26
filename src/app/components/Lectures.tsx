import { PREFIX } from "./prefix";
import React from 'react';

// 1. Updated Type Definitions
type lectureProps = {
    lectureName: string,
    date?: string,
    readings?: string,       // New Readings field
    notesLink?: string,
    resourceName?: string,
    resourceLink?: string,
}

// 2. Updated Data Structure with 'readings'
// to link notes add - notesLink: `${PREFIX}search_notes.pdf` 
// simply place pdfs in public, I can sort it later
const LECTURE_DATA = [
  { 
      date: "Jan 21", 
      name: "Introduction to AI", 
  },
  { 
      date: "Jan 23", 
      name: "Search Problems: Blind Search (BFS, DFS), Iterative Deepening",
      resourceName: "Uninformed Search",
      resourceLink: `${PREFIX}uninformed_search.pdf` 
  },

  { date: "Jan 26",
    name: "Heuristic Search (Best-g, Best-h)", 
    resourceName: "Informed Search",
    resourceLink: `${PREFIX}informed_search.pdf` 
},


  { date: "Jan 28", name: "Optimal Search: A*" },
  { date: "Jan 30", name: "Adversarial search (minimax + alpha-beta pruning)" },
  { date: "Feb 2", name: "Discrete Optimization: Local Search" },
  { date: "Feb 4", name: "Propositional Logic, SAT and NP-Completeness" },
  { date: "Feb 6", name: "CSPs: GSAT, WALKSAT, N-Queens" },
  { date: "Feb 9", name: "First Order Logic" },
  { date: "Feb 11", name: "PDDL (+ a solver)" },
  { date: "Feb 13", name: "(Bayesian) Probability Review" },
  { date: "Feb 16", name: "No Class" },
  { date: "Feb 18", name: "Bayesian Networks (modeling)" },
  { date: "Feb 20", name: "Linear Algebra Review" },
  { date: "Feb 23", name: "Continuous Optimization" },
  { date: "Feb 25", name: "Convexity + more LA" },
  { date: "Feb 27", name: "Constrained Optimization (modeling)" },
  { date: "March 2", name: "Constrained Optimization Solving" },
  { date: "March 4", name: "Intro to Supervised Learning (k-NN)" },
  { date: "March 6", name: "Linear Regression" },
  { date: "March 9", name: "Bias and Variance Tradeoff" },
  { date: "March 11", name: "Logistic Regression and Entropy" },
  { date: "March 13", name: "MIDTERM" },
  { date: "March 16", name: "Perceptrons" },
  { date: "March 18", name: "MLPs and Backpropagation" },
  { date: "March 20", name: "Deep Learning" },
  { date: "March 23", name: "No Class" },
  { date: "March 25", name: "No Class" },
  { date: "March 27", name: "No Class" },
  { date: "March 30", name: "Markov Reward Processes" },
  { date: "April 1", name: "MDPs, Policy Evaluation" },
  { date: "April 3", name: "Value Iteration" },
  { date: "April 6", name: "Q-Learning" },
  { date: "April 8", name: "Probabilistic GEN AI: Naive Bayes" },
  { date: "April 10", name: "PCA + Linear Algebra Review" },
  { date: "April 13", name: "K-Means + Facility Location" },
  { date: "April 15", name: "GMMs + Probability review" },
  { date: "April 17", name: "Final Project: Go + MCTS" },
  { date: "April 20", name: "AlphaGo: MCTS + Learning" },
  { date: "April 22", name: "Iterative Deepening Review" },
  { date: "April 24", name: "No Class" },
  { date: "April 27", name: "No Class" },
  { date: "April 29", name: "No Class" },
  { date: "May 1", name: "No Class" },
  { date: "May 4", name: "No Class" },
];

function Lecture({lectureName, date, readings, notesLink, resourceName, resourceLink}: lectureProps) {
    const isNoClass = lectureName === "No Class";
    return (
        <tr className={`hover:bg-white/5 transition-colors group ${isNoClass ? 'opacity-40' : ''} border-b border-white/5 last:border-0`}>
            {/* Lecture Name */}
            <td className="px-3 md:px-6 py-4 font-medium text-white group-hover:text-yellow-200">
                {lectureName}
            </td>
            
            {/* Date */}
            <td className="px-3 md:px-6 py-4 text-white/70 tabular-nums whitespace-nowrap">
                {date}
            </td>

            {/* Readings Column */}
            <td className="px-3 md:px-6 py-4 text-white/70 whitespace-nowrap">
                {readings ? (
                    <span className="text-white/80">{readings}</span>
                ) : (
                    <span className="text-white/20">-</span>
                )}
            </td>

            {/* Notes Column */}
            <td className="px-3 md:px-6 py-4 text-white/70 whitespace-nowrap">
                {notesLink ? (
                    <a 
                        href={notesLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline decoration-yellow-400/50 hover:decoration-yellow-400 text-yellow-200/90 hover:text-yellow-200 transition-all"
                    >
                        Notes
                    </a>
                ) : (
                    <span className="text-white/20">-</span>
                )}
            </td>

            {/* Additional Resources Column */}
            <td className="px-3 md:px-6 py-4 text-white/70 whitespace-nowrap">
                {(resourceName && resourceLink) ? (
                    <a 
                        href={resourceLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline decoration-yellow-400/50 hover:decoration-yellow-400 text-yellow-200/90 hover:text-yellow-200 transition-all"
                    >
                        {resourceName}
                    </a>
                ) : (
                    <span className="text-white/20"></span>
                )}
            </td>
        </tr>
    );
}

export default function Lectures() {
    return (
        <section className="py-20">
          <div className="relative p-4 md:p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm overflow-visible md:overflow-visible">
            
            <img 
                src={`${PREFIX}peka_thumbs_up.png`}
                alt="Decoration"
                className="hidden md:block absolute bottom-full right-0 w-76 h-auto object-contain mb-[-1px]" 
            />

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Lectures</h3>
            
            <div className="w-full overflow-x-auto">
                {/* Increased min-width to accommodate 5 columns */}
                <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                        <tr className="border-b border-white/20 bg-white/5">
                            {/* Adjusted column widths */}
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm w-4/12">Lecture</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm w-1/12">Date</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm w-2/12">Readings</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm w-1/12">Notes</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm w-4/12">Resources</th>
                        </tr>
                    </thead>

                    <tbody>
                        {LECTURE_DATA.map((item, index) => (
                            <Lecture
                                key={`${item.date}-${index}`}
                                lectureName={item.name}
                                date={item.date}
                                readings={item.readings}
                                notesLink={item.notesLink}
                                resourceName={item.resourceName}
                                resourceLink={item.resourceLink}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </section>
    );
}