"use client";

import styled from "styled-components";

export const AppLink = styled.a`
  text-decoration: none;
  transition: all ease-in-out 0.2s;
  opacity: var(--opacity-default-80);

  &:hover,
  &:focus,
  &:active {
    opacity: var(--opacity-default-100);
  }
`;
