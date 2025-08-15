"use client";

import React from "react";

import WebNavigation from "../_components/WebNavigation";

import LandingWrapper from "./_components/LandingWrapper";
import LandingHero from "./_components/LandingHero";
import LandingProducts from "./_components/LandingProducts";
import LandingSocials from "./_components/LandingSocials";
import BlueprintSvg from "./_components/BlueprintSvg";
import AnimatedHero from "./_components/AnimatedHero";

import { Footer, MaxWidthContainer } from "@/components";

function LandingPage() {
  return (
    <LandingWrapper>
      <WebNavigation />

      <LandingHero />
      <BlueprintSvg />

      <MaxWidthContainer className="w-100 grid g-large-10 p-b-large-30 g-large-30">
        <LandingProducts />
        <LandingSocials />
      </MaxWidthContainer>

      <Footer />
      <AnimatedHero chars="usefui" />
    </LandingWrapper>
  );
}

export default LandingPage;
