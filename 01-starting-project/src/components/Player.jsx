import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef(); //JS object that has a current property that points to the input element

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  // не потрібно, якщо використовуємо useRef
  // function handleChange(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  // без використання рефа
  // function handleClick() {
  //   setSubmitted(true);
  // }

  // з використанням рефа
  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = ""; //очищаємо поле вводу імперативно
  }
     // перевірка на null {enteredPlayerName ?? "unknown entity"}, 
    //  якщо введено ім'я, то виводимо його, якщо ні, то виводимо "unknown entity"
  return (
    <section id="player">

      <h2>Welcome, {enteredPlayerName ?? "unknown entity"}</h2> 
      <p>
        <input
          ref={playerName}
          type="text"
          //не потрібно, якщо використовуємо реф
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
