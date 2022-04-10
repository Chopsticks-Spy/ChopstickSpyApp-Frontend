import React, { useEffect, useState } from 'react'
import hp0 from '../image/HPbar/hp0.png'
import hp1 from '../image/HPbar/hp1.png'
import hp2 from '../image/HPbar/hp2.png'
import hp3 from '../image/HPbar/hp3.png'
import hp4 from '../image/HPbar/hp4.png'
import hp5 from '../image/HPbar/hp5.png'


const Timer = () => {
  
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const HealthBar = [hp0,hp1,hp2,hp3,hp4,hp5]

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
        {/* <h1 className='timer-text'>Timer</h1> */}
        <div className='hp'>
          <h1 className='hp-text'>Health Remaining</h1>
          <h1 className='hp-text' style={{
            "fontSize" : "50px"
          }}>5/5</h1>
          <img className='health-bar' src={HealthBar[5]} alt='HP-5'/>
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