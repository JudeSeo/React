import React from "react";
import { Route } from "react-router-dom";
import reactRouter1 from "./reactRouter1";
import reactRouter2 from "./reactRouter2";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={reactRouter1} />
      <Route exact path="/reactRouter2" component={reactRouter2} />
    </div>
  );
};

export default App;
