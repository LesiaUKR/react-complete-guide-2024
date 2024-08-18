import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimerRemaining] = useState(targetTime *1000);
  
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

// визначаємо, чи таймер вже закінчився і 
if (timeRemaining <=0){
  clearInterval(timer.current);
  dialog.current.open();
}

function handleReset(){
  setTimerRemaining(targetTime * 1000);
}
  // змінимо setTimeout на setInterval, щоб можна було зупинити таймер
  // setInterval відпрацьовує через певний проміжок часу, але не зупиняється
  function handleStartBtn() {
    timer.current = setInterval(() => {
   setTimerRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    },10);
  }

  function handleStopBtn() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset(){
    setTimerRemaining(targetTime * 1000);
  }
  return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? "" : "s"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopBtn : handleStartBtn}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
