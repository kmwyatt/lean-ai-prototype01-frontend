import React from "react";
import axios from "axios";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function NavMenu(props) {
  const onSelectHandler = (linkTo) => {
    props.history.push(`${linkTo}`);
  };
  return (
    <Nav activeKey="/" onSelect={(eventKey) => onSelectHandler(eventKey)}>
      <Nav.Item>
        <Nav.Link eventKey="/works">작업 목록</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/admin">관리자 페이지</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/mypage">마이페이지</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default withRouter(NavMenu);
