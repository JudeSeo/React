import React, { useEffect, useState } from "react";

const ReactRef = () => {
  const [inputRef, setInputRef] = useState(React.createRef());
  const refFocus = (e) => {
    inputRef.current.focus();
  };
  const jsFocus = () => {
    document.getElementById("id").focus();
  };
  return (
    <>
      <input id="id" type="text" ref={inputRef} />
      <input type="button" value="Ref focus" onClick={refFocus} />
      <input type="button" value="Js focus" onClick={jsFocus} />
    </>
  );
};

export default ReactRef;
