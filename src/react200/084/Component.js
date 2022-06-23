import React, { useState } from "react";
import { connect } from "react-redux";
import {add} from "./actions"

let StrAddButton = (props) => {
  return (
      <input value="Add200" type="button" onClick={props.addString} />
  );
};
let mapDispatchToProps = (dispatch, props)=>{
  console.log(`Props from App.js: ${props.AppProp}`)
  return {addString: () => dispatch(add())}
}
StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;
