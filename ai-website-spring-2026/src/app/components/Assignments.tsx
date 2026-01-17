import { useState } from "react";
import { useEffect } from "react";

type assignmentProps = {
    assignmentName: string,
    autoReleaseDate: string | undefined,
    outDate?: string,
    dueDate?: string
    href?: string
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

function Assignment({assignmentName, autoReleaseDate = "", outDate = "TBD", dueDate = "TBD", href}: assignmentProps) {
    const [released, setReleased] = useState(false);

    useEffect(() => {
        setReleased(shouldRelease(autoReleaseDate));
    }, []);

    if (released && href) {
        return (
            <tr className="hover:bg-white/5 transition-colors group">
            <td className="px-6 py-4 font-medium text-yellow-400 underline group-hover:text-blue-400">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {assignmentName}
                </a>
            </td>
            <td className="px-6 py-4 text-white/70 tabular-nums">
                {outDate}
            </td>
            <td className="px-6 py-4 text-white/70 tabular-nums">
                {dueDate}
            </td>
            </tr>
        );
    } else {
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
                        autoReleaseDate="Jan 21, 2026 14:00:00 EDT"
                        outDate="1/21"
                        dueDate="2/2"
                        href="https://hackmd.io/J_rI-VavSAG-x_79-8xSnA"
                    />
                    <Assignment
                        assignmentName="Homework 2: Informed Search"
                        autoReleaseDate="Jan 28, 2026 14:00:00 EDT"
                        outDate="1/28"
                        dueDate="2/2"
                        href="https://hackmd.io/YBJfuAbtS6q9zRqVGHzW1Q"
                    />
                    <Assignment
                        assignmentName="Homework 3: Adversarial Search"
                        autoReleaseDate="Feb 04, 2026 14:00:00 EDT"
                        outDate="2/4"
                        dueDate="2/9"
                        href="https://hackmd.io/VEyD0wKYS5agl5Ovy5vclA"
                    />
                    <Assignment
                        assignmentName="Homework 4: SAT"
                        autoReleaseDate="Feb 11, 2026 14:00:00 EDT"
                        outDate="2/11"
                        dueDate="2/17"
                        href="https://hackmd.io/8oosauPNQ9-GjTHUVd01Hw"
                    />
                    <Assignment
                        assignmentName="Homework 5: KRR"
                        autoReleaseDate="Feb 18, 2026 14:00:00 EDT"
                        outDate="2/18"
                        dueDate="2/24"
                        href="https://hackmd.io/sPAQJzC8S368FUP07PKNgg"
                    />
                    <Assignment
                        assignmentName="Homework 6: Constrained Optimization"
                        autoReleaseDate="Feb 25, 2026 14:00:00 EDT"
                        outDate="2/25"
                        dueDate="3/9"
                        href="https://hackmd.io/qXuz85jXTWeV6O473a6TOg"
                    />
                    <Assignment
                        assignmentName="Midterm (in-class)"
                        autoReleaseDate={undefined}
                        outDate="3/13"
                        dueDate="3/13"
                    />
                    <Assignment
                        assignmentName="Homework 7: Linear Regression and Bias-Variance Tradeoff"
                        autoReleaseDate="Mar 13, 2026 14:00:00 EDT"
                        outDate="3/13"
                        dueDate="3/30"
                        href="https://hackmd.io/hzpjzJnYSaeZGuoIAyVrlQ"
                    />
                    <Assignment
                        assignmentName="Homework 8: Neural Networks"
                        autoReleaseDate="Mar 20, 2026 14:00:00 EDT"
                        outDate="3/20"
                        dueDate="4/6"
                        href="https://hackmd.io/MlpYU9rGSA6dy4aPXJ1Grg"
                    />
                    <Assignment
                        assignmentName="Homework 9: MDPs and Reinforcement Learning"
                        autoReleaseDate="Apr 06, 2026 14:00:00 EDT"
                        outDate="4/6"
                        dueDate="4/13"
                        href="https://hackmd.io/vwC97nAPTLa1QE3lAcQeTg"
                    />
                    <Assignment
                        assignmentName="Homework 10: LLMs + PDDL"
                        autoReleaseDate="Apr 13, 2026 14:00:00 EDT"
                        outDate="4/13"
                        dueDate="4/20"
                        href="https://hackmd.io/4cTsuCVRRmW1VxRnnDeHWg"
                    />
                    <Assignment
                        assignmentName="Final Project Part 1"
                        autoReleaseDate="Apr 22, 2026 14:00:00 EDT"
                        outDate="4/22"
                        dueDate="TBD"
                        href="https://hackmd.io/lp701aRlRCqmmRS3Atvewg"
                    />
                    <Assignment
                        assignmentName="Final Project Part 2"
                        autoReleaseDate=""
                        outDate="TBD"
                        dueDate="TBD"
                        href="https://hackmd.io/B8BCfBV1QS-vxshLq3e3RQ"
                    />
                    <Assignment
                        assignmentName="Final Project Part 3"
                        autoReleaseDate=""
                        outDate="TBD"
                        dueDate="5/4"
                        href="https://hackmd.io/dIgJakLUSnaUtFIrQmdS9Q"
                    />
                </tbody>
            </table>
          </div>
        </section>
    );
}