import { useState } from "react";
import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    intialInvesment: 1000,
    annualInvesment: 1500,
    expectedReturn: 5,
    duration: 10,
  });

  const durationIsValid = userInput.duration > 0;

  function handleUserInput(inputKey, newValue) {
    setUserInput((existingUserInput) => {
      return {
        ...existingUserInput,
        [inputKey]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />;
      <Calculator onChangeProps={handleUserInput} userInput={userInput} />;{durationIsValid && <Result resultInput={userInput} />}
    </>
  );
}

export default App;
