import React, {Component} from "react";

class Props extends Component {
    render() {
        let propsVal = this.props.propsValue;
        propsVal += ' from App.js';
        return (
            <div>{propsVal}</div>
        )
    }
}

export default Props;
