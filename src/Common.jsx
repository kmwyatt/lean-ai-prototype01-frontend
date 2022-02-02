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
  height: 62px;
  margin: 0 auto;
  max-width: 1024px;
`;
