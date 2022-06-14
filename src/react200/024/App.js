import React from "react";
import "./App.css";
import ReactState from "./Props";

const App = () => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <ReactState reactString={"react"} />
        </div>
    );
}

export default App;
