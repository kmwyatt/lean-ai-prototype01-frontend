import React from "react";
import styled from "styled-components";
import { FadeIn, Floating, Emerge } from "../Effect";

// COMMON
const Base = styled.div``;

const Inner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  max-width: 1024px;
  overflow: hidden;
  flex-direction: row;
  font-family: "nanum-gothic", sans-serif;
`;

const Info = styled.div`
  font-size: 36px;
  font-weight: 300;
  color: #333333;
  margin: 0;
`;

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333333;
`;

const H3 = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #333333;
`;

const CoverImg = styled.img`
  /* position: absolute;
  bottom: 0;
  left: 0; */
`;

// BANNER
const BannerBase = styled.section`
  padding-top: 70px;
  background: #30a9de;
`;

function Banner() {
  return (
    <BannerBase>
      <Inner>
        <FadeIn>
          <></>
          <Floating>
            <></>
            <img src="./images/main-banner.png" />
          </Floating>
        </FadeIn>
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
      <Banner />
      <MainSection />
      <StepSection />
      <QnaSection />
    </>
  );
}
