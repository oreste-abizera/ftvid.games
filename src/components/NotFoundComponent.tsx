import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

export default function NotFoundComponent({ text }: Props): ReactElement {
  return (
    <NotFoundComponentWrapper>
      <p>{text}</p>
    </NotFoundComponentWrapper>
  );
}

const NotFoundComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;
