import React from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

function Empty() {
  return <Base>정보가 존재하지 않습니다.</Base>;
}

export default Empty;
