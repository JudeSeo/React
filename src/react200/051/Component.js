import React, {Component, useState} from "react";
import {Button, UncontrolledPopover, PopoverHeader, PopoverBody} from "reactstrap";

const Popover = () => {
    const pagination = type => alert("GO " + type);
    return (<>
        <Button id="Popover_id" type="button">
            Popover Button
        </Button>
        <UncontrolledPopover placement="right" target="Popover_id">
            <PopoverHeader>React 200</PopoverHeader>
            <PopoverBody>Aenean id magna id risus congue ornare.
                Vestibulum sed diam et mi pulvinar facilisis sed eu risus
            </PopoverBody>
        </UncontrolledPopover>
    </>)
}

export default Popover;
