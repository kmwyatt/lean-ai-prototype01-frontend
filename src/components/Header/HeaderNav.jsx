import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import LogOutBtn from "./LogOutBtn";
import NavMenu from "./NavMenu";

const Base = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  height: 100%;
  font-size: 28px;
  color: #eeeeee;
  font-family: "nanum-gothic", sans-serif;
`;

const Name = styled.span`
  font-size: 24px;
  font-weight: 300;
`;

const MenuInner = styled.div`
  font-size: 14px;
  color: #ffffff;
  margin-right: 30px;
`;

export default function HeaderNav() {
  const id = useSelector((state) => state.user.userData.id);
  const profileName = id ? id : "guest";
  return (
    <Base>
      <MenuInner>
        <NavMenu />
      </MenuInner>
      <BsPersonCircle />
      &nbsp;
      <Name>{profileName}</Name>
      <LogOutBtn />
    </Base>
  );
}
