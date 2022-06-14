import React from "react";
import "./App.css";
import Props from "./17Props";

const App = () => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <Props propsValue = "This is Props" />
        </div>
    );
}

export default App;
