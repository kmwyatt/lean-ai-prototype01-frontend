import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import styled from "styled-components";
import CreateProject from "./CreateProject";

const Base = styled.div`
  position: absolute;
  right: 10px;
`;

function CreateProjectModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          프로젝트 생성
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateProject />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function PlusBtn() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Base>
      <Button variant="secondary" size="sm" onClick={() => setModalShow(true)}>
        <BsPlusLg />
      </Button>
      <CreateProjectModal show={modalShow} onHide={() => setModalShow(false)} />
    </Base>
  );
}

export default PlusBtn;
