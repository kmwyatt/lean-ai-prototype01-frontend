import React from "react";
import styled from "styled-components";

export const Base = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  background: #555555;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
`;

export const Inner = styled.div`
  display: flex;
  height: 60px;
  margin: 0 auto;
  max-width: 1024px;
`;

const MenuGroup = styled.div`
  display: flex;
`;

const LogoBtn = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-right: 10px;
  width: 109px;
  height: 30px;
  background-image: url("./images/logo.png");
  background-size: cover;
  cursor: pointer;
`;

function Logo() {
  return <LogoBtn />;
}

export function Header() {
  return (
    <Base>
      <Inner>
        <MenuGroup>
          <Logo />
        </MenuGroup>
      </Inner>
    </Base>
  );
}
