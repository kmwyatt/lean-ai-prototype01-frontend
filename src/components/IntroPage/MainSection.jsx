import React from "react";
import styled from "styled-components";
import { Inner } from "../util/Common";
import LoginCard from "./LoginCard";
import SignUpCard from "./SignUpCard";

const MainBase = styled.div`
  background: #ffffff;
  padding: 30px 0;
`;

export default function MainSection() {
  return (
    <MainBase>
      <Inner>
        <SignUpCard />
        <LoginCard />
      </Inner>
    </MainBase>
  );
}
