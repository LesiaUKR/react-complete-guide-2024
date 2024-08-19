import React from 'react';

export default function Workout({ title, description, time, onComplete }) {
    
  const timer = React.useRef();
 console.log("timer", timer);
 console.log("time", time);

  const [timerStarted, setTimerStarted] = React.useState(false);
  const [timerExpired, setTimerExpired] = React.useState(false);
      
  function handleStartWorkout() {
    // Todo: Start timer
    if (timerStarted) return;
     console.log("start btn clicked");
    timer.current = setTimeout(() => {
      handleStopWorkout();
      setTimerExpired(true);
    }, time);
    console.log("timer.current",timer.current);
    setTimerStarted(true);
  }

  function handleStopWorkout() {
    // Todo: Stop timer
         console.log("stop btn clicked");
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
      setTimerStarted(false);
      setTimerExpired(false);
      onComplete(); // Trigger the onComplete callback when the timer stops
    }
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout} disabled={timerStarted}>Start</button>
        <button onClick={handleStopWorkout}  disabled={!timerStarted}>Stop</button>
      </p>
    </article>
  );
}
