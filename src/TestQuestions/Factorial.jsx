import React from "react";

const Factorial = () => {
  // Function to calculate factorial
  function factorial(n) {
    if (n < 0) return;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  const input = 5;
  const output = factorial(input);
  console.log("Input:", input);
  console.log("Output:", output);

  return (
    <div>
      <h3>Check Console</h3>
    </div>
  );
};

export default Factorial;
