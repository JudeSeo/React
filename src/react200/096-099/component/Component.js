import React from "react";
import { throttle } from "lodash";

const reactThrottle = () => {
  const throttleFunc = throttle(() => {
      console.log("Throttle API Call");
    },1000);

  return (
    <>
      <h2>검색어 입력</h2>
      <input type="text" onChange={throttleFunc} />
    </>
  );
};
export default reactThrottle;
