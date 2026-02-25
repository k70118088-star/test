import React from "react";

const Datatype = () => {
  // Undefined
  let a;
  console.log(typeof a);
  // Null
  const b = null;
    console.log(typeof b);
  // Boolean
  const open = true;
  console.log(typeof open);
  // Number
  const count = 55;
  console.log(typeof count);
  // Big Integer
  const big = 9007199254n;
  console.log(typeof big);
  // String
  const name = "krish";
  console.log(typeof name);
  // Array
  const array = [1, 2, 3];
  console.log(typeof array);
  // Object
  const object = { x: 1, y: [2, 3] };
console.log(typeof object );

  return <div>
          check Console 
  </div>;
};

export default Datatype;
