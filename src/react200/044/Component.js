import React, {Component, useState} from "react";
import {Form, Label, Input, Row, Col, FormGroup} from "reactstrap";

const ReactstrapForm = () => {
    return (<Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm">
            <option>no select</option>
            <option>woman</option>
            <option>man</option>
        </Input>
        <Row> {/*<Row form> 으로 사용시 warning 출력됨*/}
            <Col md={6}>
                <FormGroup>
                    <Label for="exampleAddress">address</Label>
                    <Input type="text" name="address" id="address" />
                </FormGroup>
            </Col>
            <Col md={4}>
                <FormGroup>
                    <Label for="exampleMobile">mobile</Label>
                    <Input type="text" name="mobile" id="mobile" />
                </FormGroup>
            </Col>
            <Col md={2}>
                <FormGroup>
                    <Label for="exampleAge">age</Label>
                    <Input type="text" name="age" id="age" />
                </FormGroup>
            </Col>
        </Row>
    </Form>)
}
export default ReactstrapForm;
