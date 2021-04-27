import React from "react";
import "../App.css";

const Calculator = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, ];
  const operators = ['+', "-", "*", "/"];
  const actions = ["clear", 0, "="];
  return (
    <React.Fragment>
    <div className="calculator">
      <div className="numbers">
        {numbers.map((num) => {
          return (
            <div className="numberContainer">
              {num}
1            </div>
          );
        })}
      </div>
      <div>
          {actions}
      </div>
      </div>

    </React.Fragment>
  );
};

export default Calculator;
