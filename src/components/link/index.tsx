"use client";

import styled from "styled-components";

export const AppLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  letter-spacing: calc(
    var(--fontsize-small-10) - ((var(--fontsize-small-10) * 1.066))
  );

  padding: var(--measurement-medium-30);
  border-radius: var(--measurement-medium-10);
  transition: all ease-in-out 0.2s;
  opacity: var(--opacity-default-60);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    opacity: var(--opacity-default-100);
    background-color: var(--font-color-alpha-10);
  }

  &[data-current="true"] {
    opacity: var(--opacity-default-100);
    background-color: var(--font-color-alpha-10);
  }

  &:has(svg) {
    display: flex;
    align-items: center;
    gap: var(--measurement-medium-10);
  }
`;
