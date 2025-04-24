"use client";

import styled from "styled-components";

export const TextLimiter = styled.div`
  width: 100%;
  max-width: var(--measurement-large-90);

  * {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
