import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a valid duration (1 year or more).</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
