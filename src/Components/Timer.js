import React, { useEffect, useState } from 'react'

const Timer = () => {
  
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    }
  , [running]);
  
  return (
    <div id='game-stat-box'>
      <div className='box-top'>
        <h1 className='timer-text'>Timer</h1>
        <div className='hp'>
          <h1 className='hp-text'>HP</h1>
          <img src='./src/image/HPbar/hp5.png' alt='HP-5'/>
        </div>
      </div>
      <div className="timer-count-box">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
      <div className="timer-btn-div">
        <button className='timer-btn' onClick={() => setRunning(true)}>START</button>
        <button className='timer-btn' onClick={() => setRunning(false)}>STOP</button>
        <button className='timer-btn' onClick={() => {setRunning(false);setTime(0)}}>RESET</button>       
      </div>
    </div>
  )
}

export default Timer