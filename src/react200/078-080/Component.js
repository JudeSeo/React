import React, { useState } from "react";
import {add} from "./actions"

const StrAddButton = (props) => {
  const addString = () => {
    props.store.dispatch(add())
  }
  return (
      <input value="Add200" type="button" onClick={addString} />
  );
};

export default StrAddButton;
