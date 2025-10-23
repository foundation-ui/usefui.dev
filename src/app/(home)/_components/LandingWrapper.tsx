"use client";

import { ScrollArea } from "@usefui/components";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(ScrollArea)`
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
`;

function LandingWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper scrollbar>{children}</Wrapper>;
}

export default LandingWrapper;
