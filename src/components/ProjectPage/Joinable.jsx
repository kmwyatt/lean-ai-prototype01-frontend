import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Empty from "../util/Empty";
import PlusBtn from "./PlusBtn";
import ProjectCard from "./ProjectCard";

const Base = styled.div`
  width: 100%;
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

function Joinable(props) {
  const userIndex = useSelector((state) => state.user.userData.index);
  const userRole = useSelector((state) => state.user.userData.role);
  const [list, setList] = useState([]);

  useEffect(() => {
    let body = {
      userIndex: userIndex,
    };
    axios.post("/api/project/joinableproject", body).then((res) => {
      setList(res.data);
    });
  }, [userIndex]);

  return (
    <Base>
      <Wrapper>
        <h4>참여 가능 프로젝트 </h4>
        {props.role === 9 ? <PlusBtn /> : null}
      </Wrapper>
      <ProjectList>
        {list.map((project) => {
          return (
            <ProjectCard
              cardType={userRole > 1 ? 1 : 2}
              info={project}
              userIndex={userIndex}
            />
          );
        })}
      </ProjectList>
      {!list.length ? <Empty text="참여 가능한 프로젝트가" /> : null}
    </Base>
  );
}

export default Joinable;
