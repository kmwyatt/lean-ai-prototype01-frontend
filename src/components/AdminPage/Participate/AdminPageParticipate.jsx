import React from "react";
import styled from "styled-components";

const Base = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;
  background-color: #ccc;
`;

function AdminPageParticipate() {
  return (
    <Base>
      <h1>Admin Page Participate</h1>
    </Base>
  );
}

export default AdminPageParticipate;
