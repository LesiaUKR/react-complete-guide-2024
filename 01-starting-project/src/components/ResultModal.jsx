import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom';

const ResultModal =  forwardRef(function ResultModal({targetTime, remainingTime, onReset }, ref) {
  // створюємо посилання на елемент dialog і використовуємо його для відкриття модального вікна
  // передаємо це посилання на елемент dialog через ref
  const dialog = useRef();
  
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime *1000))*100);
  
  
  // цей хук дозволяє викликати методи компонента ззовні
  // в даному випадку ми викликаємо метод showModal() для відкриття модального вікна
  // цей хук працює тільки з компонентами, які були створені за допомогою forwardRef
  useImperativeHandle(ref, () => {
    // повертаємо об'єкт з методом open, який викликає метод showModal() для відкриття модального вікна
    return {
   open(){
dialog.current.showModal();
   }
  };
});

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>   
      {userLost && <h2>You lost!</h2>}
      {!userLost && <h2>You Score: {score}!</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>, 
    document.getElementById("modal")
  );
})

export default  ResultModal;