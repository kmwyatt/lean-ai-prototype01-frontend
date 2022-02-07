import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Empty from "../util/Empty";
import ProjectCard from "./ProjectCard";

const Base = styled.div`
  width: 100%;
  padding-bottom: 40px;
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

function InProgress(props) {
  const userIndex = useSelector((state) => state.user.userData.index);
  const [list, setList] = useState([]);

  useEffect(() => {
    let body = {
      userIndex: userIndex,
    };
    axios.post("/api/project/joinedproject", body).then((res) => {
      setList(res.data);
    });
  }, [userIndex]);

  return (
    <Base>
      <Wrapper>
        <h4>참여 중인 프로젝트 </h4>
      </Wrapper>
      <ProjectList>
        {list.map((project) => {
          return (
            <ProjectCard cardType={1} info={project} userIndex={userIndex} />
          );
        })}
      </ProjectList>
      {!list.length ? <Empty text="참여 중인 프로젝트가" /> : null}
    </Base>
  );
}

export default InProgress;
