import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Logo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 10px;
  width: 109px;
  height: 30px;
  background-image: url("./images/logo.png");
  background-size: cover;
  cursor: pointer;
`;

function LogoBtn(props) {
  const onClickHandler = () => {
    props.history.push("/");
  };
  return <Logo onClick={onClickHandler} />;
}

export default withRouter(LogoBtn);
