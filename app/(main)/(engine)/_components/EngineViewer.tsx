"use client";

import React from "react";

import { ContrastContainer } from "@/components";

function EngineViewer() {
  return (
    <ContrastContainer
      className="grid g-medium-10"
      style={{ background: "var(--body-color)" }}
    >
      <code className="fs-medium-10">{JSON.stringify({ test: "test" })}</code>
    </ContrastContainer>
  );
}

export default EngineViewer;
