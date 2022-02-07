import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { BsCoin } from "react-icons/bs";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Base = styled.div`
  margin: 5px;
`;

function ProjectCard(props) {
  const onMoveHandler = () => {
    props.history.push({
      pathname: "/works",
      state: { index: props.info.index },
    });
  };

  return (
    <Base>
      <Card style={{ width: "240px", height: "400px", overflow: "hidden" }}>
        <Card.Img
          height="160px"
          variant="top"
          src={`http://localhost:4000/img/${props.info.file}`}
        />
        <Card.Body>
          <Card.Title>{props.info.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <BsCoin /> {props.info.cost}P
          </Card.Subtitle>
          <Card.Text>{props.info.content}</Card.Text>
          <ButtonGroup
            style={{
              width: "90%",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: "10px",
              margin: "auto",
            }}
          >
            <Button variant="primary" onClick={onMoveHandler}>
              이동
            </Button>
            <Button variant="secondary" href={props.info.link} target="_blank">
              상세보기
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Base>
  );
}

export default withRouter(ProjectCard);
