"use client";

import React from "react";
import { DisplayXl } from "@/app/(web)/(home)/_components/LandingHero";

function DocsHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <hgroup>
      <DisplayXl className="m-b-medium-30">{title}</DisplayXl>
      <p className="fs-medium-20 opacity-default-60">{description}</p>
    </hgroup>
  );
}

export default DocsHeading;
