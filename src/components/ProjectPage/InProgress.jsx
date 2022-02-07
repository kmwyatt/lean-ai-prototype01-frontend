import React from "react";
import styled from "styled-components";
import Empty from "../util/Empty";
import ProjectCard from "./ProjectCard";

const Base = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding-top: 5px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
`;

function InProgress() {
  return (
    <Base>
      <Wrapper>
        <h4>참여 중인 프로젝트</h4>
      </Wrapper>
      <ProjectList>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectList>
      {/* <Empty text="참여 중인 프로젝트가" /> */}
    </Base>
  );
}

export default InProgress;
