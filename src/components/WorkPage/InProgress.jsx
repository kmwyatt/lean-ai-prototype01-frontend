import React from "react";
import styled from "styled-components";
import Empty from "../util/Empty";

const Base = styled.div`
  width: 100%;
`;

function InProgress() {
  return (
    <Base>
      <h4>참여 중인 작업</h4>
      <hr />
      <Empty />
    </Base>
  );
}

export default InProgress;
