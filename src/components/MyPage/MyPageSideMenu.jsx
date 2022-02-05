import React from "react";
import { ListGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function MyPageSideMenu(props) {
  const onSelectHandler = (linkTo) => {
    props.history.push(`/mypage${linkTo}`);
  };

  return (
    <ListGroup
      defaultActiveKey="/"
      onSelect={(eventKey) => onSelectHandler(eventKey)}
    >
      <ListGroup.Item action eventKey={"/"}>
        마이페이지
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/profile"}>
        회원 정보
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/history"}>
        작업 내역
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/exchange"}>
        보상 환전
      </ListGroup.Item>
    </ListGroup>
  );
}

export default withRouter(MyPageSideMenu);
