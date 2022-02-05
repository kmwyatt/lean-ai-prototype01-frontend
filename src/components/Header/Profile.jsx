import React from "react";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import LogOutBtn from "./LogOutBtn";

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

export default function Profile() {
  const id = useSelector((state) => state.user.userData.id);
  let profileName = id ? id : "guest";
  return (
    <Base>
      <BsPersonCircle />
      &nbsp;
      <Name>{profileName}</Name>
      <LogOutBtn />
    </Base>
  );
}
