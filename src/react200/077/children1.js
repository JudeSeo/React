import React from "react";
import { Consumer } from "./Component";

const contextChildren = () => {
  return (
      <Consumer>
        {(contextValue) => (
            <button onClick={(e) => contextValue.setStateFunc("react200")}>
              {contextValue.name}_button
            </button>
        )}
      </Consumer>
  );
};

export default contextChildren;
