"use client";

import React from "react";

import { MaxWidthContainer } from "@/components";

import OverviewHero from "./OverviewHero";
import OverviewLinks from "./OverviewLinks";

function OverviewDetails() {
  return (
    <section className="w-100 h-100 p-medium-60">
      <MaxWidthContainer className="w-100 p-b-medium-60">
        <OverviewHero />
        <OverviewLinks />
      </MaxWidthContainer>
    </section>
  );
}

export default OverviewDetails;
