import React, {Component} from "react";

class ReturnMap extends Component {
    render() {
        const element_Array = [
            <li>react</li>,
            <li>200</li>,
            <li>Array map</li>
        ]
        return (
            <ul>
                {element_Array.map(v => v)}
            </ul>
        )
    }
}

export default ReturnMap;
