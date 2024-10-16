import { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800'>
      <div className='flex flex-col gap-2 mb-6'>
        {/* <p> */}
          {/* приклад використання класу, який змінює колір тексту в залежності від умови з використанням ванільного CSS*/}
          {/* <input className={`label ${emailNotValid ? 'invalid': ''}`}>Email</input> */}
         {/* приклад  використанняstyled component*/}
          {/* <Label $invalid={emailNotValid}>Email</Label> */}
          <Input
          label="Email"
            type="email"
            //приклад використання інлайнового стилю, який по умові змінює колір фону
            // style={{
            //   backgroundColor: emailNotValid ? 'red' : 'white',
            // }}
          //  className={emailNotValid ? 'invalid' : undefined}
          $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        {/* </p> */}
        {/* <p> */}
          {/* <Label $invalid={passwordNotValid}>Password</Label> */}
          <Input
          label="Password"
            type="password"
            $invalid={passwordNotValid}
          //  className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        {/* </p> */}
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
