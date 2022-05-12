import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useNotification = (title, options) => {
    if (!"Notification" in window) return;
    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") new Notification(title, options);
                else return;
            });
        } else new Notification(title, options);
    };
    return fireNotif;
};
const App = () => {
    const triggerNotif = useNotification("Can I steal your kimchi?", {
        body: "I love kimchi don't you?"
    });
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h1>Hello</h1>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
