import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import App from "./twitter/components/App";
import firebase from "./twitter/fBase";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

