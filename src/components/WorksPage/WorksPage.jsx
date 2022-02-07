import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Inner } from "../util/Common";
import ProjectInfo from "./ProjectInfo";
import SubmittedUser from "./SumittedUser";

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

function WorksPage(props) {
  const role = useSelector((state) => state.user.userData.role);
  const location = useLocation();

  console.log(location.state.index);
  return (
    <Base>
      <Inner>
        <Wrapper>
          <ProjectInfo
            info={location.state.info}
            projectIndex={location.state.index}
          />
          {role > 1 ? (
            <SubmittedUser projectIndex={location.state.index} />
          ) : null}
        </Wrapper>
      </Inner>
    </Base>
  );
}

export default WorksPage;
