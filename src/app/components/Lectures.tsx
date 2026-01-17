import { PREFIX } from "./prefix";
import React from 'react';

type lectureProps = {
    lectureName: string,
    date?: string,
}

// The raw data from your CSV file
const LECTURE_DATA = [
  { date: "Jan 21", name: "Introduction to AI" },
  { date: "Jan 23", name: "Search Problems (Puzzles): Blind Search (BFS, DFS), Iterative Deepening" },
  { date: "Jan 26", name: "Heuristic Search (Best-g, Best-h), including examples of heuristic functions" },
  { date: "Jan 28", name: "Optimal Search: A*" },
  { date: "Jan 30", name: "Adversarial search (minimax + alpha-beta pruning)" },
  { date: "Feb 2", name: "Discrete Optimization: Local Search (e.g., TSP), Exploration-Exploitation Tradeoff" },
  { date: "Feb 4", name: "Propositional Logic, SAT and NP-Completeness, CNFs" },
  { date: "Feb 6", name: "CSPs: GSAT, WALKSAT, N-Queens as an example CNF" },
  { date: "Feb 9", name: "First Order Logic" },
  { date: "Feb 11", name: "PDDL (+ a solver)" },
  { date: "Feb 13", name: "(Bayesian) Probability Review" },
  { date: "Feb 16", name: "No Class" },
  { date: "Feb 18", name: "Bayesian Networks (modeling) -- N.B. Bayes nets are generative models" },
  { date: "Feb 20", name: "Linear Algebra Review (matrix notation, dot products)" },
  { date: "Feb 23", name: "Continuous Optimization (convexity, gradient descent, etc.)" },
  { date: "Feb 25", name: "Convexity + more LA (hyperplanes, half spaces, convex polytopes)" },
  { date: "Feb 27", name: "Constrained Optimization (modeling)" },
  { date: "March 2", name: "Constrained Optimization Solving (PGD + Lagrangians)" },
  { date: "March 4", name: "Intro to Supervised Learning, classification (k-NN)" },
  { date: "March 6", name: "Linear Regression (framing as opt'n, closed form, gradient descent)" },
  { date: "March 9", name: "Bias and Variance Tradeoff, polynomial regression and regularization " },
  { date: "March 11", name: "Logistic Regression and Entropy" },
  { date: "March 13", name: "MIDTERM" },
  { date: "March 16", name: "Perceptrons" },
  { date: "March 18", name: "MLPs and Backpropagation" },
  { date: "March 20", name: "Deep Learning (data = images, text, etc.)" },
  { date: "March 23", name: "No Class" },
  { date: "March 25", name: "No Class" },
  { date: "March 27", name: "No Class" },
  { date: "March 30", name: "Markov Reward Processes, Value Functions" },
  { date: "April 1", name: "Markov Decision Processes, Policy Evaluation, Q-functions" },
  { date: "April 3", name: "Value Iteration (dynamic programming)" },
  { date: "April 6", name: "Q-Learning (reinforcement learning)" },
  { date: "April 8", name: "Probabilistic GEN AI: Naive Bayes (no time for HMMs)" },
  { date: "April 10", name: "PCA + Linear Algebra Review (eigenvalues, eigenvectors, etc.)" },
  { date: "April 13", name: "K-Means + Facility Location" },
  { date: "April 15", name: "GMMs + Probability review (Normal Distribution, MLE)" },
  { date: "April 17", name: "Final Project: Go + MCTS" },
  { date: "April 20", name: "AlphaGo: MCTS + Learning" },
  { date: "April 22", name: "Iterative Deepening Review (for FP Part 2), using heuristic and in adversarial setting" },
  { date: "April 24", name: "No Class" },
  { date: "April 27", name: "No Class" },
  { date: "April 29", name: "No Class" },
  { date: "May 1", name: "No Class" },
  { date: "May 4", name: "No Class" },
];
function Lecture({lectureName, date}: lectureProps) {
    const isNoClass = lectureName === "No Class";
    return (
        <tr className={`hover:bg-white/5 transition-colors group ${isNoClass ? 'opacity-40' : ''}`}>
            {/* Reduced padding for mobile (px-3), normal for desktop (md:px-6) */}
            <td className="px-3 md:px-6 py-4 font-medium text-white group-hover:text-yellow-200">
                {lectureName}
            </td>
            <td className="px-3 md:px-6 py-4 text-white/70 tabular-nums text-right whitespace-nowrap">
                {date}
            </td>
        </tr>
    );
}

export default function Lectures() {
    return (
        <section className="py-20">
          {/* 1. Responsive padding (p-4 md:p-10) and overflow handling */}
          <div className="relative p-4 md:p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden md:overflow-visible">
            
            {/* 2. Added 'hidden md:block' 
                The w-80 image is too large for mobile screens, so we hide it 
                on small devices and show it on medium (md) and up. 
            */}
            <img 
                src={`${PREFIX}peka_thumbs_up.png`}
                alt="Decoration"
                className="hidden md:block absolute bottom-full right-0 w-80 h-auto object-contain mb-[-1px]" 
            />

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Lectures</h3>
            
            {/* 3. Horizontal Scroll Wrapper */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[300px]">
                    <thead>
                        <tr className="border-b border-white/20 bg-white/5">
                            {/* Adjusted padding on headers */}
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Lecture</th>
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm text-right">Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {LECTURE_DATA.map((item, index) => (
                            <Lecture
                                key={`${item.date}-${index}`}
                                lectureName={item.name}
                                date={item.date}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </section>
    );
}
