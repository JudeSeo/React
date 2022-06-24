import React from "react";
import { Route } from "react-router-dom";

import "../css/new.css";
import HeaderAdmin from "./Header/Header admin";
import Footer from "./Footer/Footer";
import LoginForm from "./LoginForm";
import reactThrottle from "./Component"
import floatingPopulationList from "./floatingPopulationList"

const App = () => {
  return (
    <div className="App">
      <HeaderAdmin />
      <Route exact path="/" component={LoginForm} />
        <Route exact path="/Throttle" component={reactThrottle} />
        <Route exact path="/FloatingPopulationList" component={floatingPopulationList} />
      <Footer />
    </div>
  );
};

export default App;
