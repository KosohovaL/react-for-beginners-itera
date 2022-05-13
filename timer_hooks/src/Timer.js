import React, { useState, useRef } from 'react';
import './Timer.css';

const Timer = () => {
    const increment = useRef(null);
    const [running, setRunning] = useState(false)
    const [timer, setTimer] = useState(new Date(new Date().setHours(0, 0, 0, 0, 0)))

    const startTimer = () => {
        setRunning(true)
        setTimer(new Date(timer.setHours(0, 0, 0, 0, 0)))
        clearInterval(increment.current);
        increment.current = setInterval(() => {
            updateTimer()
        }, 1000)
    }

    function updateTimer() {
        setTimer(new Date(timer.setSeconds(timer.getSeconds() + 1)))
    }

    const stopTimer = () => {
        clearInterval(increment.current);
        setRunning(false)
    }

    return (
        <div className='timer'>
            <header>
                <div>{!running ? 'My React timer' : 'Running'}</div>
            </header>
            <h2>{timer.toLocaleTimeString()}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )


}

export default Timer