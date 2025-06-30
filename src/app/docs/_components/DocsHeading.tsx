"use client";

import React from "react";
import { DisplayXl } from "@/components";
import { Divider } from "@foundation-ui/components";

function DocsHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <React.Fragment>
      <hgroup>
        <DisplayXl className="m-b-medium-30">{title}</DisplayXl>
        <p className="fs-medium-20 opacity-default-60">{description}</p>
      </hgroup>
      <Divider className="m-y-large-10" />
    </React.Fragment>
  );
}

export default DocsHeading;
