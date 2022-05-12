import React from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") return;
    if (onCancel && typeof onCancel !== "function") return;
    const confirmAction = () => {
        if (window.confirm(message)) onConfirm();
        else onCancel();
    };
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("deleting world");
    const confirmDelete = useConfirm("Are you sure?", deleteWorld);
    return (
        <div className="App">
            <button onClick={confirmDelete}>Delete the World</button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
