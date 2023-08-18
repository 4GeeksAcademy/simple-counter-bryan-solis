import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        setIntervalId(id);

        return () => clearInterval(id); // Cleanup on component unmount
    }, []);

    const stopTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetTimer = () => {
        setSeconds(0);
        if (!intervalId) {
            const id = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);

            setIntervalId(id);
        }
    };

    const resumeTimer = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);

            setIntervalId(id);
        }
    };

    return (
        <div>
            <SecondsCounter seconds={seconds} />
            <div className="mt-3">
            <button className="btn btn-primary me-3" onClick={stopTimer}>Stop</button>
            <button className="btn btn-warning me-3" onClick={resetTimer}>Reset</button>
            <button className="btn btn-success" onClick={resumeTimer}>Resume</button>
            </div>
        </div>
    );
}

export default App;
