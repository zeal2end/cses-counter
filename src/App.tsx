import { useState } from "react";
import "./App.css";
import cses from "./../cses.json";

const csesWebAddress = "https://cses.fi/problemset/task/";

function App() {
    const randomIndex = () => Math.floor(Math.random() * cses.problems.length);

    const [index, setIndex] = useState(randomIndex);
    const [solvedCount, setSolvedCount] = useState(0);
    const [solved, setSolved] = useState(new Set());

    const settingIndex = () => {
        let curProblemId = randomIndex();
        while (solved.has(curProblemId) && solvedCount !== cses.problems.length)
            curProblemId = randomIndex();
        setIndex(curProblemId);
    };

    const settingSolved = () => {
        setSolved((solved) => solved.add(cses.problems[index].pid));
        setSolvedCount((count) => count + 1);
        settingIndex();
    };

    return (
        <>
            <h1>Data Structures and Algorithms</h1>
            <h2>
                <a
                    href={csesWebAddress.concat(
                        String(cses.problems[index].pid)
                    )}>
                    {cses.problems[index].problem}
                </a>
            </h2>
            <div className="card">
                <button onClick={settingIndex}>Too Hard!!</button>
                <button className="success" onClick={settingSolved}>
                    Accepted
                </button>
            </div>
            <h1 className="count">{solvedCount}</h1>
        </>
    );
}

export default App;
