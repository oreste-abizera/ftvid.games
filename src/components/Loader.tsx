import React, { ReactElement } from "react";
import styled from "styled-components";

export default function Loader(): ReactElement {
  return (
    <LoaderWrapper>
      <div className="loader__container"></div>
    </LoaderWrapper>
  );
}
const LoaderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader__container {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    border: 5px solid #e5e5e5;
    border-top-color: #2d4059;
    animation: spinner 1s infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
