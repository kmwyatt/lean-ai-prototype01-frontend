import React from "react";
import styled from "styled-components";

const Base = styled.footer`
  position: relative;
  width: 100%;
  background: #333333;
  font-family: "nanum-gothic", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;
const Inner = styled.div`
  display: flex;
  height: 200px;
  margin: 0 auto;
  max-width: 1024px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.p`
  color: #aaaaaa;
  margin: 1px 0;
`;

const Contact = styled.p`
  color: #ffffff;
  margin: 10px 0;
`;

export function Footer() {
  return (
    <Base>
      <Inner>
        <Info>(주)잡쇼퍼 | 대표: 김하연</Info>
        <Info>서울특별시 관악구 남부순환로 1984, 2층</Info>
        <Info>(봉천동, 이공빌딩)</Info>
        <Info>사업자등록번호: 315-87-00617</Info>
        <Info>전화번호: 070-4616-1515</Info>
        <Contact>대표이메일 : ceo@jobshopper.co.kr</Contact>
        <Info>© {new Date().getFullYear()}. LEAN AI. All Rights Reserved.</Info>
      </Inner>
    </Base>
  );
}
