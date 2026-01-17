import { useState } from "react";
import { useEffect } from "react";

type assignmentProps = {
    assignmentName: string,
    autoReleaseDate: string,
    outDate?: string,
    dueDate?: string
    href?: string
}

function Assignment({assignmentName, autoReleaseDate = "", outDate = "TBD", dueDate = "TBD"}: assignmentProps) {
    const [released, setReleased] = useState(false);

    useEffect(() => {
        setReleased(shouldRelease(autoReleaseDate));
    }, []);

    return (
        <tr className="hover:bg-white/5 transition-colors group">
        <td className="px-6 py-4 font-medium text-white group-hover:text-yellow-200">
            {assignmentName}
        </td>
        <td className="px-6 py-4 text-white/70 tabular-nums">
            {outDate}
        </td>
        <td className="px-6 py-4 text-white/70 tabular-nums">
            {dueDate}
        </td>
        </tr>
    );
}

function shouldRelease(autoReleaseDate: string | undefined) {
    if (autoReleaseDate === undefined) {
        return true;
    }
    
    const now = new Date();
	// Convert now into EST
	const nowEST = new Date(
		now.toLocaleString("en-US", {
			timeZone: "America/New_York",
		})
	);

    return nowEST > new Date(autoReleaseDate);
}

export default function Assignments() {
    return (
        <section className="py-20">
          <div className="p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6 text-center">Assignments</h3>
            <p className="text-sm text-center mb-5">
                Assignments release at 2:00 PM EST and are due at 11:59 PM EST.
            </p>
            
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-white/20 bg-white/5">
                        <th className="px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Assignment</th>
                        <th className="px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Out</th>
                        <th className="px-6 py-4 font-bold text-yellow-400 uppercase tracking-wider text-sm">Due</th>
                    </tr>
                </thead>

                <tbody>
                    <Assignment
                        assignmentName="Homework 1: Uninformed Search"
                        outDate="1/21"
                        dueDate="2/2"
                    />
                    <Assignment
                        assignmentName="Homework 2: A*"
                        outDate="1/28"
                        dueDate="2/2"
                    />
                    <Assignment
                        assignmentName="Homework 3: Adversarial Search"
                        outDate="2/4"
                        dueDate="2/9"
                    />
                    <Assignment
                        assignmentName="Homework 4: SAT"
                        autoReleaseDate=""
                        outDate="2/11"
                        dueDate="2/17"
                    />
                    <Assignment
                        assignmentName="Homework 5: KRR"
                        outDate="2/18"
                        dueDate="2/24"
                    />
                    <Assignment
                        assignmentName="Homework 6: Constrained Optimization"
                        outDate="2/25"
                        dueDate="3/9"
                    />
                    <Assignment
                        assignmentName="Midterm (in-class)"
                        outDate="3/13"
                        dueDate="3/13"
                    />
                    <Assignment
                        assignmentName="Homework 7: Linear Regression and Bias-Variance Tradeoff"
                        outDate="3/13"
                        dueDate="3/30"
                    />
                    <Assignment
                        assignmentName="Homework 8: Neural Networks"
                        outDate="3/20"
                        dueDate="4/6"
                    />
                    <Assignment
                        assignmentName="Homework 9: MDPs and Reinforcement Learning"
                        outDate="4/6"
                        dueDate="4/13"
                    />
                    <Assignment
                        assignmentName="Homework 10: LLMs + PDDL"
                        outDate="4/13"
                        dueDate="4/20"
                    />
                    <Assignment
                        assignmentName="Final Project Part 1"
                        outDate="4/22"
                    />
                    <Assignment
                        assignmentName="Final Project Part 2"
                    />
                    <Assignment
                        assignmentName="Final Project Part 3"
                        dueDate="5/4"
                    />
                </tbody>
            </table>
          </div>
        </section>
    );
}