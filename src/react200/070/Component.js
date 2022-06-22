import React, { useEffect } from "react";

const ReactMouseOut = () => {
  const mouseOut = (tag) => {
    console.log("TAG " + tag);
  };
  return (
    <>
      <div onMouseOut={(e) => mouseOut("div")}>
        <h3>DIV onMouseOut</h3>
      </div>
      <input type="text" onMouseOut={(e) => mouseOut("input")} />
      <select onMouseOut={(e) => mouseOut("select")}>
        <option value="react">react</option>
        <option value="200">200</option>
      </select>
    </>
  );
};

export default ReactMouseOut;
