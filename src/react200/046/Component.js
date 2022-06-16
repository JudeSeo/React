import React, {Component, useState} from "react";
import {Jumbotron, Button} from "reactstrap";

const JumbotronFunc = () => {
    return (<>
        <Jumbotron style={{backgroundColor: "#D38C7C"}}>
            <h1 className="display-4">React 200</h1>
            <p className="h4">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <hr className="my-2"/>
            <p>There are many variations of passages od Lorem Ipsum availavle.</p>
            <p className="lead">
                <Button color="danger">Go Detail</Button>
            </p>
        </Jumbotron>
    </>)
}

export default JumbotronFunc;

// Jumbotron 인식 불가.. reactstrap에 없는것으로 보임
