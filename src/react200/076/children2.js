import React from "react";
import {Consumer} from "./Component";

const contextChildren2 = () => {
    return <Consumer>
        {contextValue => <h3>{`contextValue: ${contextValue}`}</h3>}
    </Consumer>
};

export default contextChildren2;
