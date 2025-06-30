"use client";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  p,
  b,
  strong,
  i,
  span,
  code {
    font-size: var(--fontsize-medium-20);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: var(--measurement-medium-10);
  }
`;

function DocsWrapper({
  children,
  ...restProps
}: {
  children: React.ReactNode;
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

export default DocsWrapper;
