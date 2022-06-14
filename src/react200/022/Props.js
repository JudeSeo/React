import React from "react";
import datatype from "prop-types";

const PropsDefalut = ({ReactNumber, ReactString}) => {
    return (<div style={{padding: "0px"}}>
        {ReactString} {ReactNumber}
    </div>)
}
PropsDefalut.defaultProps = {
    ReactString: "리액트", ReactNumber: 400
}

export default PropsDefalut;
