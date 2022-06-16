import React, {Component, useState} from "react";
import {ListGroup, ListGroupItem, Badge} from "reactstrap";

const ReactListGroup = () => {
    return (<>
        <ListGroup>
            <listGroupItem color="danger" className="justify-content-between">
                Badge<Badge pill>200</Badge>
            </listGroupItem>
            <ListGroupItem disabled tag="a" href="#">Disable</ListGroupItem>
            <ListGroupItem tag="a" href="http://example.com">Link</ListGroupItem>
            <ListGroupItem tag="button" action onClick={e => alert("button")}>Button</ListGroupItem>
        </ListGroup>
    </>)
}

export default ReactListGroup;
