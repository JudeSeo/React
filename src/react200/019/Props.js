import React from "react";
import datatype from "prop-types";

const PropsBoolean = ({BooleanTrueFalse}) => {
    return (
        <div style={{padding:"0px"}}>
            {BooleanTrueFalse?'2. ':'1. '}
            {BooleanTrueFalse.toString()}
        </div>
    )
}

export default PropsBoolean;
