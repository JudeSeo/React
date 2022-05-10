import ReactDOM from "react-dom";
import React from "@types/react";
import {useInput} from "./useInput";

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