"use client";

import React from "react";

import LandingWrapper from "./_components/LandingWrapper";
import LandingHero from "./_components/LandingHero";
import LandingProducts from "./_components/LandingProducts";
import LandingSocials from "./_components/LandingSocials";
import BlueprintSvg from "./_components/BlueprintSvg";

import { Page } from "@usefui/components";
import { LayoutWrapper } from "./_components/LayoutWrapper";
import { LandingNavigation, Footer, MaxWidthContainer } from "@/components";

function LandingPage() {
  return (
    <Page className="h-100 w-100">
      <LayoutWrapper>
        <LandingWrapper>
          <LandingNavigation />

          <LandingHero />
          <BlueprintSvg />

          <MaxWidthContainer className="w-100 grid g-large-10 p-b-large-30 g-large-30">
            <LandingProducts />
            <LandingSocials />
          </MaxWidthContainer>

          <Footer />
        </LandingWrapper>
      </LayoutWrapper>
    </Page>
  );
}

export default LandingPage;
