import React from "react";

const Variables = () => {
   
         var Style = 'I am a var variable.'      
         let Table = 'I am a let variable.'
         const Toy = 'I am a const variable.' 

  return (
    <div>
      <div>
        <h1>var Style = {Style}</h1>
         <p>"var" = can be redeclared and also can be reassigned . </p>
        <h1>let Table = {Table}</h1>
         <p>"let" = can be reassigned and it cannot be redeclared.</p>
        <h1>const Toy  = {Toy}</h1>
        <p>"const" = cannot be reassigned and also cannot be redeclared.</p>
      </div>
    </div>
  );
};

export default Variables;
