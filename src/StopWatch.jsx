import React,{useState, useEffect, useRef, use} from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const timerRef = useRef(null);
    const startTimer = useRef(0);

    useEffect(() => {

    }, [isRunning]);

    function handleStart() {
        
    }

    function handleStop() {
        
    }

    function handleReset() {
        
    }       

    function formatTime(ms) {
        
        return `00:00:00`;
    }
    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={handleStart} disabled={isRunning}
                className="start-button">Start</button>
                <button onClick={handleStop} disabled={!isRunning}
                className="stop-button">Stop</button>
                <button onClick={handleReset}
                className="reset-button">Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;