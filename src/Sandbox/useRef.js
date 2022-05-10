import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
    const potato = useRef();
    setTimeout(() => potato.current.focus(), 5000);
    return (
        <div className="App">
            <h1>Hi</h1>
            <input ref={potato} placeholder="la" />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
