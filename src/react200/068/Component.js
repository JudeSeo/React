import React, { useEffect } from "react";

const ReactMouseMove = () => {
  const mouseMove = (tag) => {
    console.log("TAG " + tag);
  };
  return (
    <>
      <div onMouseMove={(e) => mouseMove("div")}>
        <h3>DIV onMouseMove</h3>
      </div>
      <input type="text" onMouseMove={(e) => mouseMove("input")} />
      <select onMouseMove={(e) => mouseMove("select")}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
    </>
  );
};

export default ReactMouseMove;
