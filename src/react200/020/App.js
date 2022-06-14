import React from "react";
import "./App.css";
import PropsObjVal from "./Props";

const App = () => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <PropsObjVal ObjectJson={{react:"리액트", towhundred:"200"}} />
        </div>
    );
}

export default App;
