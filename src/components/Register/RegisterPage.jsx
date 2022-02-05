import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/modules/user";
import { withRouter } from "react-router-dom";

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const Inner = styled.div`
  width: 400px;
`;

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const onIdHandler = (event) => {
    setId(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onNameHandler = (event) => {
    setName(event.target.value);
  };

  const onPhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      id === "" ||
      password === "" ||
      confirmPassword === "" ||
      name === "" ||
      phoneNumber === "" ||
      email === ""
    ) {
      return alert("필수 사항을 입력하지 않았습니다.");
    }

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }

    let body = {
      id: id,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Base>
      <Inner>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" value={id} onChange={onIdHandler} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={onPasswordHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
            />
          </Form.Group>
          <br />
          <hr />
          <br />
          <Form.Group className="mb-3">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" value={name} onChange={onNameHandler} />
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
          <Button variant="primary" type="submit" onClick={onSubmitHandler}>
            가입 신청
          </Button>
        </Form>
      </Inner>
    </Base>
  );
}

export default withRouter(RegisterPage);
