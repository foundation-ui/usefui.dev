"use client";

import styled from "styled-components";

export const PatternBackground = styled.div`
  --dot-bg: var(--body-color);
  --dot-color: var(--font-color-alpha-30);

  --dot-size: var(--measurement-small-30);
  --dot-space: var(--measurement-medium-30);

  background: var(--body-color);

  background:
    linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 100%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 100%
      )
      center / var(--dot-space) var(--dot-space),
    radial-gradient(var(--dot-color) 33%, transparent 100%) !important;
`;
