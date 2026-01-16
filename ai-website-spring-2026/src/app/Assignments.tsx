type assignmentProps = {
    assignmentName: string,
    outDate?: string,
    dueDate?: string
}

function Assignment({assignmentName, outDate = "TBD", dueDate = "TBD"}: assignmentProps) {
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

export default function Assignments() {
    return (
        <section className="py-20">
          <div className="p-10 rounded-[26px] border border-white/10 bg-black/40 backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-6 text-center">Assignments</h3>
            
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
                    />
                    <Assignment
                        assignmentName="Homework 2: A*"
                    />
                    <Assignment
                        assignmentName="Homework 3: Adversarial Search"
                    />
                    <Assignment
                        assignmentName="Homework 4: SAT"
                    />
                    <Assignment
                        assignmentName="Homework 5: KRR"
                    />
                    <Assignment
                        assignmentName="Homework 6: Constrained Optimization"
                    />
                    <Assignment
                        assignmentName="Homework 7: Linear Regression and Bias-Variance Tradeoff"
                    />
                    <Assignment
                        assignmentName="Homework 8: Neural Networks"
                    />
                    <Assignment
                        assignmentName="Homework 9: MDPs and Reinforcement Learning"
                    />
                    <Assignment
                        assignmentName="Homework 10: LLMs + PDDL"
                    />
                    <Assignment
                        assignmentName="Final Project Part 1"
                    />
                    <Assignment
                        assignmentName="Final Project Part 2"
                    />
                    <Assignment
                        assignmentName="Final Project Part 3"
                    />
                </tbody>
            </table>
          </div>
        </section>
    );
}