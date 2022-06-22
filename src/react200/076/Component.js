import React, { useEffect, useState } from "react";
import Children from "./children1";

const { Consumer, Provider } = React.createContext();
const ContextApi = () => {
  return (
    <Provider value="React200">
      <Children />
    </Provider>
  );
};

export { Consumer };
export default ContextApi;

// Consumer, Provider를 useState 사용해서 값 할당하려고 했지만
// useState는 함수 밖에서 사용할 수 없고, export는 함수 밖에서 사용해야 해서 걍 값 할당함
