import React from "react";
import { ListGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";

function AdminPageSideMenu(props) {
  const onSelectHandler = (linkTo) => {
    props.history.push(`${linkTo}`);
  };

  return (
    <ListGroup
      defaultActiveKey="/"
      onSelect={(eventKey) => onSelectHandler(eventKey)}
    >
      <ListGroup.Item action eventKey={"/"}>
        관리자 페이지
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/works"}>
        데이터 검수
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/member"}>
        회원 목록
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/associate"}>
        가입 신청 목록
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/participate"}>
        작업 참여 신청 목록
      </ListGroup.Item>
      <ListGroup.Item action eventKey={"/exchange"}>
        포인트 환전 신청 목록
      </ListGroup.Item>
    </ListGroup>
  );
}

export default withRouter(AdminPageSideMenu);
