import React from "react";
import styled from "styled-components";
import { Inner } from "../util/Common";
import InProgress from "./InProgress";
import Joinable from "./Joinable";

const Base = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  min-height: 800px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function WorkPage() {
  return (
    <Base>
      <Inner>
        <Wrapper>
          <InProgress />
          <Joinable />
        </Wrapper>
      </Inner>
    </Base>
  );
}

export default WorkPage;
