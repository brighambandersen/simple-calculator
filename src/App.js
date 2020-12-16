import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const AppDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;
// test

const BigStyle = css`
  font-size: xx-large;
  width: 100px;
  height: 50px;
  text-align: center;
  margin: 0.5em;
`;

const BigInput = styled.input`
  ${BigStyle}
`;

const BigSelect = styled.select`
  ${BigStyle}
`;

const EqualsLine = styled.hr`
  width: 200px;
`;

export default function App() {
  const [firstOperand, setFirstOperand] = useState();
  const [operator, setOperator] = useState("add");
  const [secondOperand, setSecondOperand] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    let result;

    switch (operator) {
      case "add":
        result = firstOperand + secondOperand;
        break;
      case "subtract":
        result = firstOperand - secondOperand;
        break;
      case "multiply":
        result = firstOperand * secondOperand;
        break;
      case "divide":
        result = firstOperand / secondOperand;
        break;
    }
    result = Math.floor(result * 1000) / 1000;

    if (isNaN(result)) {
      result = "...";
    }

    setAnswer(result);
  }, [firstOperand, operator, secondOperand]);

  return (
    <AppDiv>
      <h1>Simple Calculator</h1>
      <br />
      <BigInput
        type="number"
        value={firstOperand}
        onChange={(e) => setFirstOperand(parseFloat(e.target.value))}
        placeholder="1"
      />
      <br />
      <BigSelect value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">−</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </BigSelect>
      <br />
      <BigInput
        type="number"
        value={secondOperand}
        onChange={(e) => setSecondOperand(parseFloat(e.target.value))}
        placeholder="2"
      />
      <br />
      <EqualsLine />
      <h1>{answer}</h1>
    </AppDiv>
  );
}
