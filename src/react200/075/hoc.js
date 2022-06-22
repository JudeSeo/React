import React from "react";
import Component from "./Component";
const hoc = (props) => {
  console.log("2. HocComponent render");
  return <h2>props.name:{props.name}</h2>;
};

export default Component(hoc, "hoc");
