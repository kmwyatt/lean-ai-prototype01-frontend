import React from "react";
import styled from "styled-components";
import { Intro } from "./Intro/Intro";

const Base = styled.section`
  padding-top: 60px;
  /* height: 1000px; */
  width: 100%;
`;

export function Main() {
  return (
    <Base>
      <Intro />
    </Base>
  );
}
