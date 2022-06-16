import React, {Component, useState} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

const ReactModal = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    return (<>
        <Button color="warning" onClick={toggle}>Modal 버튼</Button>
        <Modal isOpen={modal} falde={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
            <ModalBody>
                The generated Lorem Ipsum is therefore always free from repetition
            </ModalBody>
            <ModalFooter>
                <button color="primary" onClick={toggle}>확인</button>
                <button color="secondary" onClick={toggle}>닫기</button>
            </ModalFooter>
        </Modal>
    </>)
}

export default ReactModal;
