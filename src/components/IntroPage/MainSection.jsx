import React from "react";
import styled from "styled-components";
import { Inner, Info } from "../util/Common";
import LoginCard from "./LoginCard";

const CardBase = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  padding: 40px 20px 0 40px;
  box-sizing: border-box;
`;

const TextGroup = styled.div`
  position: absolute;
`;

const GoSignUp = styled.a`
  display: block;
  text-decoration: none;
  color: #30a9de;
  font-weight: 700;
  font-size: 18px;
  padding: 20px 0;
  cursor: pointer;
`;

function SignUpCard() {
  return (
    <CardBase>
      <TextGroup>
        <Info>
          집에서 편하게 작업하고
          <br />
          일한 만큼 받아가세요
        </Info>
        <GoSignUp>회원가입 후 작업 시작하기 &gt;</GoSignUp>
      </TextGroup>
      <img src="./images/main-image.png" />
    </CardBase>
  );
}

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
