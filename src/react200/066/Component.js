import React, { useEffect } from "react";

const ReactonClick = () => {
  const buttonClick = (param) => {
    if (typeof param !== "string") param = "Click a";
    console.log("param: " + param);
  };

  return (
    <>
      <button onClick={(e) => buttonClick("Click button")}>Click button</button>
      <div onClick={(e) => buttonClick("Click div")}>Click div</div>
      <a href="javascript:" onClick={buttonClick}>
        Click a
      </a>
    </>
  );
};

export default ReactonClick;
