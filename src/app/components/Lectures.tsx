import { PREFIX } from "./prefix";

// 1. Define the shape of your data items
// This tells TypeScript: "Even if you don't see these fields yet, they are allowed."
type LectureItem = {
  date: string;
  name: string;
  readings?: string;
  resourceNames?: string | string[];
  resourceLinks?: string | string[];
};

// 2. Updated Type Definitions for the Component Props
type lectureProps = {
    lectureName: string,
    date?: string,
    readings?: string,
    resourceNames?: string | string[],
    resourceLinks?: string | string[],
}

// 3. Apply the type to the array: `const LECTURE_DATA: LectureItem[]`
const LECTURE_DATA: LectureItem[] = [
  { 
      date: "Jan 21", 
      name: "Introduction to AI", 
      readings: "R&N Chapter 1"
  },
  { 
      date: "Jan 23", 
      name: "Search Problems: Blind Search (BFS, DFS), Iterative Deepening",
      readings: "R&N 3.0-3.4",
      resourceNames: "Uninformed Search",
      resourceLinks: `${PREFIX}uninformed_search.pdf` ,
  },
  { 
      date: "Jan 26",
      name: "Heuristic Search (Best-g, Best-h)",       
      readings: "R&N 3.4-3.5.1",
      resourceNames: "Informed Search",
      resourceLinks: `${PREFIX}informed_search.pdf` 
  },
  { 
      date: "Jan 28", 
      name: "Optimal Search: A*",  
      readings: "R&N 3.5.2-3.7",
      resourceNames: "Informed Search",
      resourceLinks: `${PREFIX}informed_search.pdf` 
  },
  { 
      date: "Jan 30", 
      name: "Adversarial search (minimax + alpha-beta pruning)", 
      readings: "R&N 5.0-5.3 ",       
      resourceNames: "Adversarial Search",
      resourceLinks: `${PREFIX}adversarial_search.pdf`
  },
  {   date: "Feb 2", 
      name: "Discrete Optimization: Local Search", 
      readings: "R&N 4.1", 
      resourceNames: "Local Search", 
      resourceLinks: `${PREFIX}local_search.pdf`
  },
  { date: "Feb 4", 
   name: "Propositional Logic, SAT and NP-Completeness", 
   readings: "R&N 7.6.2-7.6.3" ,
   resourceNames: "Satisfiability", 
   resourceLinks: `${PREFIX}satisfiability.pdf`
  },
  { date: "Feb 6", 
   name: "CSPs: GSAT, WALKSAT, N-Queens",
   resourceNames: "Satisfiability", 
   resourceLinks: `${PREFIX}satisfiability.pdf`},
  { date: "Feb 9", 
   name: "First Order Logic", 
   readings: "R&N 8", 
   resourceNames: "KRR: First-Order Logic", 
   resourceLinks: `${PREFIX}krr_logic.pdf`},
  { date: "Feb 11", 
   name: "PDDL (+ a solver)", 
   readings: "R&N 10",
   resourceNames: "PDDL",
   resourceLinks: `${PREFIX}pddl.pdf`},
  { date: "Feb 13", 
   name: "(Bayesian) Probability Review",
   readings: "R&N 12" ,
   resourceNames: "Probability",
   resourceLinks: `${PREFIX}probability.pdf`},
  { date: "Feb 16", name: "No Class" },
  { date: "Feb 18", 
   name: "Bayesian Networks (modeling)", 
   readings: "R&N 14", 
   resourceNames: "Bayesian Networks",
   resourceLinks: `${PREFIX}bayes_nets.pdf`},
  { date: "Feb 20", name: "Continuous Optimization", 
   resourceNames: "Gradient Descent",
   resourceLinks: `${PREFIX}grad_descent.pdf`},
  { date: "Feb 23", name: "NO CLASS: snow day" },
  { date: "Feb 25", name: "Convexity, Linear Programming",
     resourceNames: "Convex Sets + Linear Programming",
   resourceLinks: `${PREFIX}convex_sets.pdf`},
  { date: "Feb 27", name: "Constrained Optimization (modeling)", 
     resourceNames: ["Notebook", "Mathematical Programming"], 
   resourceLinks: [
    'https://colab.research.google.com/drive/1opX8tMD4aYabmZzP19WjX8Auep9XJCw_?usp=sharing',
    `${PREFIX}mathematical_programming.pdf`
    ]
  },
  { date: "March 2", name: "Constrained Optimization Solving",
      resourceNames: "Lagrangians",
   resourceLinks: `${PREFIX}Lagrangians.pdf`
  },
  { date: "March 4", name: "Intro to Supervised Learning (k-NN)",
        resourceNames: "Supervised Learning",
   resourceLinks: `${PREFIX}supervised_learning.pdf`},
  { date: "March 6", name: "Linear Regression",
        resourceNames: "Linear Regression",
   resourceLinks: `${PREFIX}linear_reg.pdf`},
  { date: "March 9", name: "Bias and Variance Tradeoff",
        resourceNames: "Bias and Variance",
   resourceLinks: `${PREFIX}bias_variance.pdf`},
  { date: "March 11", name: "Logistic Regression and Entropy",
        resourceNames: "Logistic Regression",
   resourceLinks: `${PREFIX}logistic_reg.pdf` },
  { date: "March 13", name: "MIDTERM" },
  { date: "March 16", name: "Perceptrons",
        resourceNames: "Perceptrons",
   resourceLinks: `${PREFIX}perceptrons.pdf`},
  { date: "March 18", name: "MLPs and Backpropagation",   
     resourceNames: "MLPs",
     resourceLinks: `${PREFIX}mps.pdf`},
  { date: "March 20", name: "Deep Learning" },
  { date: "March 23", name: "No Class" },
  { date: "March 25", name: "No Class" },
  { date: "March 27", name: "No Class" },
  { date: "March 30", name: "Markov Reward Processes",
  resourceNames: "MRPs",
   resourceLinks: `${PREFIX}mdps.pdf`},
  { date: "April 1", name: "MDPs, Policy Evaluation",   
     resourceNames: "MDPs",
     resourceLinks: `${PREFIX}mdps.pdf`},
  { date: "April 3", name: "Value Iteration" },
  { date: "April 6", name: "Q-Learning" },
  { date: "April 8", name: "Policy Gradient Methods",    
     resourceNames: "Policy Gradient",
     resourceLinks: `${PREFIX}policy_gradient.pdf` },
  { date: "April 10", name: "PCA + Linear Algebra Review" },
  { date: "April 13", name: "K-Means + Facility Location" },
  { date: "April 15", name: "GMMs + Probability review", 
    resourceNames: "Gaussian Mixture Models",
    resourceLinks: `${PREFIX}GaussianMixtureModels.pdf`},
  { date: "April 17", name: "Final Project: Go + MCTS", 
    resourceNames: "MCTS",
    resourceLinks: `${PREFIX}MCTS.pdf`},
  { date: "April 20", name: "AlphaGo: MCTS + Learning", 
    resourceNames: "MCTS",
    resourceLinks: `${PREFIX}MCTS.pdf` },
  { date: "April 22", name: "Iterative Deepening Review" },
  { date: "April 24", name: "No Class" },
  { date: "April 27", name: "No Class" },
  { date: "April 29", name: "No Class" },
  { date: "May 1", name: "No Class" },
  { date: "May 4", name: "No Class" },
];

// policy_gradient.pdf
// MCTS.pdf
// GaussianMixtureModels.pdf

interface resourceProps {
    resourceNames?: string | string[],
    resourceLinks?: string | string[]
}

function ResourceCol({resourceNames, resourceLinks} : resourceProps) {
    if (resourceNames && resourceLinks) {
        if (typeof resourceLinks === "string") {
            // one resource for the day
            return (<td className="px-3 md:px-6 py-4 text-white/70 whitespace-nowrap">
                <a 
                    href={resourceLinks}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline decoration-yellow-400/50 hover:decoration-yellow-400 text-yellow-200/90 hover:text-yellow-200 transition-all"
                >
                    {resourceNames}
                </a>
            </td>);
        } else if (Array.isArray(resourceNames)) {
            // multiple resources for the day
            return (<td className="px-3 md:px-6 py-4 text-white/70 whitespace-nowrap">
                {resourceNames.map((name, i) => (
                    <div key={i}>
                    <a 
                        href={resourceLinks[i]}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline decoration-yellow-400/50 hover:decoration-yellow-400 text-yellow-200/90 hover:text-yellow-200 transition-all"
                    >
                        {name}
                    </a>
                    </div>
                ))}
            </td>);
        }
    } else {
        // no resources
        return (<td className="px-3 md:px-6 py-4 text-white/70 whitespace-nowrap">
            <span className="text-white/20"></span>
        </td>);
    }
}

function Lecture({lectureName, date, readings, resourceNames, resourceLinks}: lectureProps) {
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

            {/* Additional Resources Column */}
            <ResourceCol resourceNames={resourceNames} resourceLinks={resourceLinks}/>
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
                            <th className="px-3 md:px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm w-4/12">Notes / Resources</th>
                        </tr>
                    </thead>

                    <tbody>
                        {LECTURE_DATA.map((item, index) => (
                            <Lecture
                                key={`${item.date}-${index}`}
                                lectureName={item.name}
                                date={item.date}
                                readings={item.readings}
                                resourceNames={item.resourceNames}
                                resourceLinks={item.resourceLinks}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </section>
    );
}
