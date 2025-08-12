"use client";

import React from "react";
import styled from "styled-components";

import { Badge } from "@usefui/components";
import { DisplaySmall } from "@/components";

const Banner = styled(Badge)`
  justify-content: flex-start !important;

  * {
    color: currentColor;
  }
`;

function DocsBanner({
  title,
  description,
  mode,
}: {
  title?: string;
  description?: string;
  mode: "meta" | "warning" | "error";
}) {
  return (
    <Banner variant={mode} className="p-medium-60 w-100">
      <hgroup className="grid g-medium-30">
        {title && <DisplaySmall>{title}</DisplaySmall>}
        {description && (
          <p className="fs-medium-10 opacity-default-60">{description}</p>
        )}
      </hgroup>
    </Banner>
  );
}

export default DocsBanner;
