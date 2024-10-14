import {useRef } from 'react';
import Input from './Input';

export const userData = {
  name: '',
  email: '',
};

export default function App() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  function handleSaveData() {
const enteredName = nameInputRef.current.value;
const enteredEmail = emailInputRef.current.value;
    userData.name = enteredName;
    userData.email = enteredEmail;
    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={nameInputRef} type="text" label="Your Name"/>
      <Input ref={emailInputRef} type="email" label="Your E-Mail"/>
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}