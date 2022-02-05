import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const CardBase = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #cccccc;
  margin-left: 30px;
`;

function LoginCard(props) {
  const onLoginHandler = () => {
    props.history.push("/login");
  };
  return (
    <CardBase>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={onLoginHandler}>
          로그인 하러 가기
        </Button>
        <Button variant="secondary" size="lg">
          회원가입
        </Button>
      </div>
    </CardBase>
  );
}

export default withRouter(LoginCard);
