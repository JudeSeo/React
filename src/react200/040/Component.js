import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";

const ReactstrapCard = () => {
    return (<div>
        <Card>
            <CardImg top height="200px" src="https://han.gl/hYMTU" alt="Card image" />
            <CardBody>
                <CardTitle>Card 제목</CardTitle>
                <CardSubtitle>Card 부제목</CardSubtitle>
                <CardText>Card 내용 Lorem Ipsum is simply dummy test.</CardText>
                <Button> 버튼</Button>
            </CardBody>
        </Card>
    </div>)
}
export default ReactstrapCard;
