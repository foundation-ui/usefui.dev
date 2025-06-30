"use client";

import React from "react";
import styled from "styled-components";

const TextWrapper = styled.div`
  p,
  i,
  b,
  strong {
    color: var(--font-color-alpha-60);
  }
`;

function DocsTextBlock({ children }: { children: React.ReactNode }) {
  return <TextWrapper>{children}</TextWrapper>;
}

export default DocsTextBlock;
