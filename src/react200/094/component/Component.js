import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

const reactBounce = () => {
  const debounceFunc = debounce(() => {
      console.log("Debounce API Call");
    },1000);

  return (
    <>
      <h2>검색어 입력</h2>
      <input type="text" onChange={debounceFunc} />
    </>
  );
};
export default reactBounce;
