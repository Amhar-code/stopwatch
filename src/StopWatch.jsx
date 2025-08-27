import React,{useState, useEffect, useRef, use} from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current =  setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function handleStart() {
       setIsRunning(true); 
       startTimeRef.current = Date.now() - elapsedTime;
    }

    function handleStop() {
        setIsRunning(false);
    }

    function handleReset() {
        setElapsedTime(0);
        setIsRunning(false);
    }       

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let miliseconds = Math.floor(elapsedTime % 1000 / 10);
        
        hours = String(hours).padStart(2, "00");
        minutes = String(minutes).padStart(2, "00");
        seconds = String(seconds).padStart(2, "00");
        miliseconds = String(miliseconds).padStart(2, "00");

        return `${minutes}:${seconds}:${miliseconds}`;
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