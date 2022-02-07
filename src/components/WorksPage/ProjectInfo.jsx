import React from "react";
import { Card } from "react-bootstrap";
import { BsCoin } from "react-icons/bs";

function ProjectInfo(props) {
  return (
    <Card
      style={{
        flexDirection: "row",
        overflow: "hidden",
        marginBottom: "40px",
      }}
    >
      <Card.Img
        width="240px"
        height="160px"
        variant="left"
        src={`http://localhost:4000/img/${props.info.file}`}
      />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          Project No. {props.projectIndex}
        </Card.Subtitle>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <BsCoin /> {props.info.cost}P
        </Card.Subtitle>
        <Card.Text>{props.info.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectInfo;
