import React from "react";
import datatype from "prop-types";

const ReactState = ({reactString}) => {
    const state = {
        StateString: reactString,
        StateNumber: 200
    }
    

    return (<div style={{padding: "0px"}}>
        {state.StateString} {state.StateNumber}
    </div>)
}

export default ReactState;
