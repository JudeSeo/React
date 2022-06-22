import React from "react";
import StrAddButton from "./Component";

const App = (props) => {
    return (
        <div>
            <h1>Start React 200!</h1>
            <span>{props.store.getState().data.str}</span><br/>
            <StrAddButton store={props.store}/>
        </div>
    );
};

export default App;
