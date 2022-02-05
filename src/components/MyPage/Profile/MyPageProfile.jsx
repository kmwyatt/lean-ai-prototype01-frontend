import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
`;

const Inner = styled.div`
  width: 400px;
`;

function MyPageProfile(props) {
  const userInfo = useSelector((state) => state.user.userData);

  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const [email, setEmail] = useState(userInfo.email);

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const userStatus = () => {
    if (userInfo.role === 0) {
      return "가입 승인 대기중";
    } else if (userInfo.role === 1) {
      return "작업자";
    } else if (userInfo.role === 9) {
      return "관리자";
    }
  };

  return (
    <Base>
      <Inner>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" value={userInfo.id} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>상태</Form.Label>
            <Form.Control type="text" value={userStatus()} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={onPasswordHandler}
            />
          </Form.Group>
          <br />
          <hr />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" value={userInfo.name} disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>휴대폰 번호</Form.Label>
            <Form.Control
              type="text"
              value={phoneNumber}
              onChange={onPhoneNumberHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={onEmailHandler}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit" disabled>
            변경
          </Button>
        </Form>
      </Inner>
    </Base>
  );
}

export default MyPageProfile;
