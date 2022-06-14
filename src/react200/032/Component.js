import React, {Component} from "react";

class Fragments extends Component {

    render() {
        return (
            // <> 이런식으로도 사용 가능
            <React.Fragment>
                <p>P TAG</p>
                <span>SPAN TAG</span>
            </React.Fragment>
            // </> 이런식으로도 사용 가능
        )
    }
}

export default Fragments;
