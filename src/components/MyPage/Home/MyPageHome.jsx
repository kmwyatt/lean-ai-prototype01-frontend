import React from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  background-color: #ccc;
`;

function MyPageHome() {
  return (
    <Base>
      <h1>My Page Home</h1>
    </Base>
  );
}

export default MyPageHome;
