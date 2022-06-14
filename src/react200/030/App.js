import React from "react";
import "./App.css";
import FunctionComponent from "./Component";

const App = () => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <FunctionComponent contents={"[THIS IS FunctionComponent ]"} />
        </div>
    );
}

export default App;
