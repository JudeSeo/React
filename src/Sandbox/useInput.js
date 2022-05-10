import React, { useState } from "react";
import ReactDOM from "react-dom";

export const useInput = (initalValue, validator) => {
    const [value, setValue] = useState(initalValue);
    const onChange = (event) => {
        const {
            target: { value }
        } = event;
        let willUpdate = true;
        if (typeof validator === "function") willUpdate = validator(value);
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
};

const App = () => {
    const maxLen = (value) => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <input placeholder="Name" {...name} />
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);