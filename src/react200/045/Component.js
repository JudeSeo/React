import React, {Component, useState} from "react";
import {InputGroup, InputGroupAddon, InputGroupText, Input, Button} from "reactstrap";

const InputGroupFunc = () => {
    return (<>
        <InputGroup>
            <Input placeholder="userid"/>
            <InputGroupAddon addonType="append">
                <InputGroupText>@reactmail.com</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <Button>버튼</Button>
            </InputGroupAddon>
            <Input />
        </InputGroup>
    </>)
}

export default InputGroupFunc;

// InputGroupAddon이 없어진 관계로 실행 안됨
