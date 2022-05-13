import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import App from "./twitter/componments/App"
import firebase from "./twitter/firebase";
import AppRouter from "./twitter/components/Router";
console.log(firebase);

const App = () => {
    return (
        <div className="App">
            <AppRouter />
            <h1>Hi</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
