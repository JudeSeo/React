import React from "react";
import datatype from "prop-types";

const PropsDataType = ({String, Number, Boolean, Array, ObjectJson, Function}) => {
    return (
        <div style={{padding:"0px"}}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <p>BooleanProps: {Boolean.toString()}</p>
            <p>ArrayProps: {Array.toString()}</p>
            <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps: {Function}</p>
        </div>
    )
}
PropsDataType.propType={
    String: datatype.string,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func
}

export default PropsDataType;
