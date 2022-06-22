import React, { useEffect } from "react";

const ReactOnSubmit = () => {
  const submit = (e) => {
    let inputValue = document.getElementById("inputId").value;
    console.log(`inputValue: ${inputValue}`);
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={submit}>
        <input type="text" name="inputName" id="inputId" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default ReactOnSubmit;
