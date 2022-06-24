import React from "react";
import { Link } from "react-router-dom";

const reactRouter1 = () => {
  return (
    <>
      <h1>path="/"</h1>
      <h3>reactRouter1</h3>
      <Link to={"/reactRouter2"}>reactRouter2</Link>
    </>
  );
};
export default reactRouter1;
