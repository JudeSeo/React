import React from "react";
import "./App.css";
import PropsDefalut from "./Props";

const App = () => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <PropsDefalut ReactNumber={200} />
        </div>
    );
}

export default App;
