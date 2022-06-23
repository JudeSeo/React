import React from "react";
import { Route } from "react-router-dom";
import reactRouter1 from "./reactRouter1";
import reactRouter2 from "./reactRouter2";

import "../css/new.css";
import HeaderAdmin from "./Header/Header admin";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <HeaderAdmin />
      <Route exact path="/" component={reactRouter1} />
      <Route exact path="/reactRouter2" component={reactRouter2} />
      <Footer />
    </div>
  );
};

export default App;
