import React from "react";
import styled from "styled-components";
import Empty from "../util/Empty";

const Base = styled.div`
  width: 100%;
`;

function Joinable() {
  return (
    <Base>
      <h4>참여 가능한 작업</h4>
      <hr />
      <Empty text="참여 가능한 작업이" />
    </Base>
  );
}

export default Joinable;
