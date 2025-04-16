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
`;
