import { wrap } from "gsap/all";
import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import styled from "styled-components";

const Base = styled.div`
  margin: 5px;
`;

function ProjectCard() {
  return (
    <Base>
      <Card style={{ width: "240px", height: "400px", overflow: "hidden" }}>
        <Card.Img height="160px" variant="top" src="./images/step-bg.jpg" />
        <Card.Body>
          <Card.Title>동물</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">100P</Card.Subtitle>
          <Card.Text>
            코끼리와 기린과 사자와 호랑이와 고슴도치와 금붕어를 자세히
            조사해주세요.
          </Card.Text>
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
            <Button variant="success" disabled>
              신청
            </Button>
            <Button variant="secondary">상세보기</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Base>
  );
}

export default ProjectCard;
