"use client";

import React from "react";
import styled from "styled-components";

import { TextBlink } from "@/components";
import type { ConsoleProps } from "../Console";

const ConsoleBodyWrapper = styled.div`
  border-top: var(--measurement-small-30) solid var(--font-color-alpha-10);
  margin-top: var(--measurement-medium-30);
  padding: var(--measurement-medium-30) 0;
  height: 100%;
  width: 100%;

  code {
    font-size: var(--fontsize-small-50);
  }

  &[data-mode="error"] {
    code {
      color: var(--color-red) !important;
    }
  }
`;

function ConsoleBody({ mode, value }: ConsoleProps) {
  return (
    <ConsoleBodyWrapper data-mode={mode}>
      <code>
        {value ? (
          <b className="opacity-default-30">{">"}</b>
        ) : (
          <TextBlink as="b" className="opacity-default-30 fs-small-60">
            {">"}
          </TextBlink>
        )}
        &nbsp;{value}
      </code>
    </ConsoleBodyWrapper>
  );
}

export default ConsoleBody;
