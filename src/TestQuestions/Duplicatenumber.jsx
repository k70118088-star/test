import React from "react";

const Duplicatenumber = () => {
let numbers = [1, 2, 3, 2, 4, 5, 1, 3, 3];

for (let i = 0; i < numbers.length; i++) {
  let count = 0;

  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count++;
    }
  }

  if (count > 1 && numbers.indexOf(numbers[i]) === i) {
    console.log(numbers[i] + " appears " + count + " times");
  }
}

  return (
    <div>
     check console
    </div>
  );
};

export default Duplicatenumber;
