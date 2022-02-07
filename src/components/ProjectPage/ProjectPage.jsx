import React from "react";
import { useSelector } from "react-redux";
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

function ProjectPage() {
  const role = useSelector((state) => state.user.userData.role);
  return (
    <Base>
      <Inner>
        <Wrapper>
          {role === 1 ? <InProgress /> : null}
          <Joinable role={role} />
        </Wrapper>
      </Inner>
    </Base>
  );
}

export default ProjectPage;
