import React from "react";

const Props = (props) => {
    let propsVal = props.propsValue;
    propsVal += ' from App.js';
    return (
        <div>{propsVal}</div>
    )
}

export default Props;
