import React, { useEffect } from "react";

const ReactMouseOver = () => {
  const mouseOver = (tag) => {
    console.log("TAG " + tag);
  };
  return (
    <>
      <div onMouseOver={(e) => mouseOver("div")}>
        <h3>DIV onMouseOver</h3>
      </div>
      <input type="text" onMouseOver={(e) => mouseOver("input")} />
      <select onMouseOver={(e) => mouseOver("select")}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
    </>
  );
};

export default ReactMouseOver;
