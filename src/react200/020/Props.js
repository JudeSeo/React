import React from "react";
import datatype from "prop-types";

const PropsObjVal = ({ObjectJson}) => {
    return (
        <div style={{padding: "0px"}}>
            {JSON.stringify(ObjectJson)}
        </div>
    )
}
PropsObjVal.propTypes = {
    ObjectJson: datatype.shape({
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default PropsObjVal;
