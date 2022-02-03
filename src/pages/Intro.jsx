import React from "react";
import styled from "styled-components";
import { FadeIn, Floating, Emerge } from "../components/Effect";
import { Inner, H2, H3, Info, CoverImg } from "../components/Common";

// BANNER
const BannerBase = styled.section`
  background: #30a9de;
  padding-top: 40px;
`;

const ImageGroup = styled.div`
  width: 100%;
  height: 414px;
`;

function IntroBanner() {
  return (
    <BannerBase>
      <Inner>
        <ImageGroup>
          <FadeIn>
            <CoverImg src="./images/main-banner01.png" />
            <CoverImg src="./images/main-banner02.png" />
            <CoverImg src="./images/main-banner03.png" />
          </FadeIn>
          <Floating>
            <></>
            <CoverImg src="./images/main-banner04.png" />
          </Floating>
        </ImageGroup>
      </Inner>
    </BannerBase>
  );
}

// MAIN-SECTION
const CardBase = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  padding: 40px 20px 0 40px;
  box-sizing: border-box;
  &:last-of-type {
    margin-left: 30px;
  }
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

function LoginCard() {
  return <CardBase>login</CardBase>;
}

const MainBase = styled.div`
  background: #ffffff;
  padding: 30px 0;
`;

function MainSection() {
  return (
    <MainBase>
      <Inner>
        <SignUpCard />
        <LoginCard />
      </Inner>
    </MainBase>
  );
}

// STEP-SECTION
const StepBase = styled.section`
  /* background: #eeeeee; */
  position: relative;
  background-image: url("./images/step-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  padding: 60px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(220, 220, 220, 0.85);
  }
`;

const StepGroup = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`;

function StepSection() {
  return (
    <StepBase>
      <Inner>
        <StepGroup>
          <Emerge>
            <H2>5단계로 알아보는 LEAN-AI 작업</H2>
            <img src="./images/main-step.png" />
          </Emerge>
        </StepGroup>
      </Inner>
    </StepBase>
  );
}

// QNA-SECTION
const QnaBase = styled.section`
  background: #ffffff;
  padding: 60px 0;
`;

const QnaGroup = styled.div`
  margin-left: 60px;
  line-height: 2;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

function QnaSection() {
  return (
    <QnaBase>
      <Inner>
        <img src="./images/main-qna.png" />
        <QnaGroup>
          <H3>궁금하신 점이 있으신가요?</H3>
          <p>
            우측 하단의 채널톡 아이콘을 클릭해서 문의를 진행해주세요! <br />
            최대한 빠른 시간 안에 답변 드리겠습니다.
          </p>
          <p>상담 가능 시간 (평일 오전 10시 ~ 오후 5시)</p>
          <br />
        </QnaGroup>
      </Inner>
    </QnaBase>
  );
}

// INTRO
export function Intro() {
  return (
    <>
      <IntroBanner />
      <MainSection />
      <StepSection />
      <QnaSection />
    </>
  );
}
