import React from "react";

function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Joash</button>;
}

export default Tickler;
