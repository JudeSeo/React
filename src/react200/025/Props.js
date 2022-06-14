import React, {Component} from "react";

class SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: "react",
        }
    }

    StateChange = flag => {
        if (flag == "direct") this.StateString = "리액트";
        if (flag == "setState") this.setState({StateString: "리액트"});
    }


    render() {
        return (
            <div style={{padding: "0px"}}>
                <button onClick={(e) => this.StateChange("direct", e)}>
                    state 직접 변경
                </button>
                <button onClick={(e) => this.StateChange("setstate", e)}>
                    setState로 변경
                </button>
                <br/>
                [state 변경하기] StateString:{this.state.StateString}
            </div>
        )
    }
}

export default SetState;

// 화살표로 풀어보려고 했는데 hook 안 쓰고 하는 법을 모르겠어서 걍 Class로 해결...
