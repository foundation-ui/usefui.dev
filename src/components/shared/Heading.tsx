"use client";

import styled from "styled-components";
import Link from "next/link";

export const HeroHeading = styled.hgroup`
  text-align: center;
  max-width: var(--breakpoint-tablet);
`;
export const HeroLink = styled(Link)`
  text-decoration: none;
`;
export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: clamp(var(--fontsize-medium-10), 5vw, var(--fontsize-large-50));
  letter-spacing: -0.5px;
  line-height: 1;
`;
export const HeroSubtitle = styled.h1`
  font-weight: 600;
  font-size: clamp(var(--fontsize-medium-30), 5vw, var(--fontsize-medium-60));
  letter-spacing: -0.5px;
  line-height: 1;
`;
