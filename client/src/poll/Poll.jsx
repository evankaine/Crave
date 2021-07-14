import { useState } from "react";
import React from "react";

function Counter() {
  const [disable, setDisable] = React.useState(false)
  const [countDubstep, setCountDubstep] = useState(0);
  const [countHouse, setCountHouse] = useState(0)

  function voteDubstep() {
    setCountDubstep(countDubstep + 1);
    setDisable(true)
  }
  
  function voteHouse() {
    setCountHouse(countHouse + 1);
    setDisable(true)
  }

  return (
    <div>
      <h3>Vote For Your <br /> Favorite Genre</h3>
      <h4>{countDubstep}</h4>
      <button disabled={disable}
      onClick={() => voteDubstep()}>
      Dubstep
      </button>
      <h4>{countHouse}</h4>
      <button disabled={disable}
      onClick={() => voteHouse()}>
      House
      </button>
      
    </div>
  );
}
export default Counter;