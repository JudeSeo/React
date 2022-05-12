import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") callback(isFull);
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen)
                element.current.requestFullscreen();
            else if (element.current.mozRequestFullScreen)
                element.current.mozRequestFullScreen();
            else if (element.current.webkitRequestFullScreen)
                element.current.webkitRequestFullScreen();
            else if (element.current.msRequestFullScreen)
                element.current.msRequestFullScreen();
            runCb(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozRequestFullScreen) document.mozRequestFullScreen();
        else if (document.webkitRequestFullScreen)
            document.webkitRequestFullScreen();
        else if (document.msRequestFullScreen) document.msRequestFullScreen();
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};

const App = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen(onFullS);
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
                <button onClick={exitFull}>Exit Fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make Fullscreen</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
