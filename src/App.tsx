// import "./App.css";

import { useEffect, useState } from "react";

type progressBarProps = {
  progress: number;
};

const ProgressBar = ({ progress }: progressBarProps) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(" animatedProgress ", animatedProgress);
      setAnimatedProgress((prev) => {
        if (prev >= progress) {
          clearInterval(interval); //for efficiency
          return progress;
        }

        return Math.min(progress, prev + 10);
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const progressBgColor =
    animatedProgress < 25 ? "red" : animatedProgress < 75 ? "yellow" : "green";

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          width: `${animatedProgress}%`,
          backgroundColor: progressBgColor,
        }}
      >
        {animatedProgress == 100 && (
          <span style={{ marginRight: "35%" }}>Process Completed </span>
        )}
        {animatedProgress}%
      </div>
    </div>
  );
};

function App() {
  const [progressBars, setProgressBars] = useState([50, 24, 80, 73, 100]);
  const [inputProgress, setInputProgress] = useState(0);

  const handleInsertNewBar = () => {
    if (inputProgress <= 0 || inputProgress > 100) return;

    setProgressBars((prev) => [...prev, inputProgress]);
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Progress Bar
      </h1>

      <div className="input-container">
        <input
          className="inputbox"
          value={inputProgress}
          onChange={(e) => setInputProgress(Number(e.target.value))}
        />
        <span className="insertBtn" onClick={handleInsertNewBar}>
          Insert
        </span>
        Range 1 - 100
      </div>

      {progressBars.map((progres, index) => (
        <ProgressBar key={`${progres}##${index}`} progress={progres} />
      ))}
    </div>
  );
}

export default App;
