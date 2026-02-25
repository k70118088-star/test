import { useState } from "react";
import Variables from "./TestQuestions/Variables";
import Datatype from "./TestQuestions/Datatype";
import Object from "./TestQuestions/Object";
import Duplicatenumber from "./TestQuestions/Duplicatenumber";
import Factorial from "./TestQuestions/Factorial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Cart from "./Landingpage/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      )
    },
    {
      path: "/cart",
      element: (
        <>
          <Cart />
        </>
      )
    },
    {
      path: "/variables",
      element: (
        <>
          <Variables />
        </>
      )
    },
    {
      path: "/datatype",
      element: (
        <>
        <Datatype />
        </>
      )
    },
    {
      path: "/object",
      element: (
        <>
        <Object />
        </>
      )
    },
    {
      path: "/factorial",
      element: (
        <>
        <Factorial />
        </>
      )
    },
    {
      path: "/duplicatenumber",
      element: (
        <>
        <Duplicatenumber />
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />

     
    
      
      
    </>
  );
}

export default App;
