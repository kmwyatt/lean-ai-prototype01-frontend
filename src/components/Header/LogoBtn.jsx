import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Logo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 10px;
  width: 109px;
  height: 30px;
  cursor: pointer;
`;

function LogoBtn(props) {
  const onClickHandler = () => {
    props.history.push("/");
  };
  return <Logo onClick={onClickHandler} src="./images/logo.png" />;
}

export default withRouter(LogoBtn);
