import React, { useState } from "react";

export const MyApp = () => {
    const [nombre, setNombre] = useState("Luis Xavier");
    const [num, setNum] = useState(0);
    
    const Increment = () => {
        setNum( num + 1);
     }
    const Decrement = () => {
        setNum( num - 1);
     }
    const Reset = () => {
        setNum( 0 );
     }

  return (
    <>
      <div className="container">
        <h1>Proyecto 1 - Counter-App</h1>
        <hr />
        <h3>Contador = {num}</h3>
        <button onClick={ Increment } >+1</button>
        <button onClick={ Decrement }>-1</button>
        <button onClick={ Reset }>Reset</button>
      </div>
    </>
  );
};
