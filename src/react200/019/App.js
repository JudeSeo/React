import React from "react";
import "./App.css";
import PropsBoolean from "./Props";

const App = () => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>CSS 적용하기</p>
            <PropsBoolean BooleanTrueFalse ={false} />
            <PropsBoolean BooleanTrueFalse />
        </div>
    );
}

export default App;
