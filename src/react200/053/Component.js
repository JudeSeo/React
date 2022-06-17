import React, {Component, useState, useEffect} from "react";
import {Spinner} from "reactstrap";

const ReactSpinner = () => {
    return (<>
        <Spinner color="secondary" />
        <Spinner color="success" />
        <Spinner type="grow" color="dark" />
        <Spinner type="grow" color="info" />
        <Spinner size="sm" color="primary" />
        <Spinner style={{width: "10rem", height:"0.5rem"}} color="dark" /><br/>
        <Spinner style={{width: "10rem", height:"10rem"}} color="secondary" />
        <Spinner style={{width: "10rem", height:"10rem"}} type="grow" color="primary" />
    </>)
}

export default ReactSpinner;
