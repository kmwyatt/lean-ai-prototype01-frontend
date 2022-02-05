import React from "react";
import styled from "styled-components";
import { FadeIn, Floating } from "../util/Effect";
import { Inner, CoverImg } from "../util/Common";

const BannerBase = styled.section`
  background: #30a9de;
  padding-top: 100px;
`;

const ImageGroup = styled.div`
  width: 100%;
  height: 414px;
`;

export default function IntroBanner() {
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
