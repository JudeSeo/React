import React, {Component, useState} from "react";
import {Button, Fade} from "reactstrap";

const ReactstrapFade = () => {
    const [fadeInOut, setFadeInOut] = useState(true);
    const toggle = () => {
        setFadeInOut(!fadeInOut);
    }
    return (<div>
        <Button color="success" onClick={toggle}>Fade In/Out</Button>
        <Fade in={fadeInOut} tag="h1">Lorem ipsum sit amet, consectetur adipiscing elit</Fade>
    </div>)
}
export default ReactstrapFade;
