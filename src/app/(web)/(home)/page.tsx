"use client";

import React from "react";

import WebNavigation from "../_components/WebNavigation";
import LandingHero from "./_components/LandingHero";
import LandingProducts from "./_components/LandingProducts";
import LandingSocials from "./_components/LandingSocials";
import BlueprintSvg from "./_components/BlueprintSvg";

import { Footer, MaxWidthContainer } from "@/components";

function LandingPage() {
  return (
    <React.Fragment>
      <WebNavigation />

      <LandingHero />
      <BlueprintSvg />

      <MaxWidthContainer className="w-100 grid g-large-10 p-b-large-30 g-large-30">
        <LandingProducts />
        <LandingSocials />
      </MaxWidthContainer>

      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
