import React, { useEffect, useState } from "react";

const ReactCurrying = () => {
  const PlusNumOrString = (c, d) => c + d;
  const PlusFunc1 = (a) => {
    return (b) => PlusNumOrString(a, b);
  };
  const PlusFunc2 = (a) => (b) => PlusNumOrString(a, b);
  const PlusFunc = (a) => PlusFunc1(a)(200);

  return (
    <>
      <input
        type="button"
        value="NumberPlus"
        onClick={(e) => alert(PlusFunc(100))}
      />
      <input
        type="button"
        value="StringPlus"
        onClick={(e) => alert(PlusFunc("react"))}
      />
    </>
  );
};

export default ReactCurrying;
