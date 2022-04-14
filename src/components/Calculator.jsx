import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState();
  const [answer, setAnswer] = useState();
  const [operations, setOperations] = useState([
    {
      label: "x",
      value: "x",
    },
    {
      label: "+",
      value: "+",
    },
    {
      label: "/",
      value: "/",
    },
    {
      label: "-",
      value: "-",
    },
  ]);
  const [operation, setOperation] = useState("+");

  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
  const handleAnswer = () => {
    let ans = 0;
    if (operation === "x") {
      ans = parseInt(value1) * parseInt(value2);
    } else if (operation === "+") {
      ans = parseInt(value1) + parseInt(value2);
    } else if (operation === "/") {
      ans = parseInt(value1) / parseInt(value2);
    } else {
      ans = parseInt(value1) - parseInt(value2);
    }
    setAnswer(ans);
  };

  return (
    <div className="calculator-container">
      <input type="text" onChange={(e) => handleChange1(e)} />
      <select onChange={(e) => setOperation(e.target.value)}>
        {operations.map((op) => (
          <option value={op.value}>{op.label}</option>
        ))}
      </select>
      <input type="text" onChange={(e) => handleChange2(e)} />
      <button className="calculate" onClick={() => handleAnswer()}>
        Calculate
      </button>
      <div className="numbers">
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
        <button className="number-button">1</button>
      </div>
      {answer}
    </div>
  );
};

export default Calculator;
