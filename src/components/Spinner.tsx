"use client";

import styled, { keyframes } from "styled-components";
import { Icon } from "@usefui/icons";

const Rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const Blink = keyframes`
    0% {
        opacity: var(--opacity-default-30);
    }
    100% {
        opacity: var(--opacity-default-100);

    }
`;
export const Spinner = styled.span`
  width: var(--measurement-medium-60);
  height: var(--measurement-medium-60);
  border: var(--measurement-small-60) solid var(--font-color-alpha-30);
  border-bottom-color: transparent;
  border-radius: var(--measurement-large-90);
  display: inline-block;
  box-sizing: border-box;
  transform-origin: center center;
  animation: ${Rotate} 1s linear infinite;

  &[data-variant="inner"] {
    width: var(--fontsize-medium-20);
    height: var(--fontsize-medium-20);
  }
`;
export const TextBlink = styled.p`
  animation: ${Blink} 1s linear infinite alternate;
`;
export const SVGSpinner = styled(Icon)`
  animation: ${Rotate} 1s linear infinite;
  transform-origin: center;
`;
