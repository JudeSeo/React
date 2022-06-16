import React, {Component} from "react";
import {UncontrolledCollapse, Button, CardBody, Card} from "reactstrap";

const ReactstrapCollapse = () => {
    return (<div>
        <Button color="warning" id="toggle">
            펼치기/접기
        </Button>
        <UncontrolledCollapse toggler="#toggle">
            <Card>
                <CardBody>
                    React 200
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>)
}
export default ReactstrapCollapse;
