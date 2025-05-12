"use client";

import styled from "styled-components";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--breakpoint-mobile), 1fr)
  );
  grid-gap: var(--measurement-medium-10) var(--measurement-medium-10);
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
  }
`;

export const GridLayoutSmall = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--measurement-large-90), 1fr)
  );
  grid-gap: var(--measurement-medium-30) var(--measurement-medium-30);
  box-sizing: border-box;
`;
