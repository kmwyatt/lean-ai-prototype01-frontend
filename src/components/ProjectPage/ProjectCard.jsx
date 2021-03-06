import axios from "axios";
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
      state: { index: props.info.index, info: props.info },
    });
  };

  const onSubmitHandler = (userId) => {
    let body = {
      userIndex: props.userIndex,
      projectIndex: props.info.index,
    };
    console.log(body);
    axios.post("/api/project/usersubmit", body).then((res) => {
      if (res.data.success) {
        alert("신청 완료");
        props.history.go(0);
      } else {
        alert("신청 실패");
      }
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
            {props.cardType === 1 ? (
              <Button variant="primary" onClick={onMoveHandler}>
                이동
              </Button>
            ) : null}
            {props.cardType === 2 ? (
              <Button variant="success" onClick={onSubmitHandler}>
                신청
              </Button>
            ) : null}
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
