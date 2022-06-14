import React from "react";
import datatype from "prop-types";

const PropsRequired = ({ReactNumber, ReactString}) => {
    return (
        <div style={{padding: "0px"}}>
            {ReactString}{ReactNumber}
        </div>
    )
}
PropsRequired.propTypes = {
    ReactString:datatype.isRequired
}

export default PropsRequired;
