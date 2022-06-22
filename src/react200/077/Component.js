import React, { useState } from "react";
import Children from "./children1";
const { Provider, Consumer } = React.createContext();
export { Consumer };

const ContextApi = () => {
  const [state, setState] = useState("");
  const setStateFunc = (value) => {
    setState({name:value});
  };
  const content = {
    ...state,
    setStateFunc
  };
  return (
    <Provider value={content}>
      <Children />
    </Provider>
  );
};

export default ContextApi;
