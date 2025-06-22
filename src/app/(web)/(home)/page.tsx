"use client";

import React from "react";

import WebNavigation from "../_components/WebNavigation";
import LandingHero from "./_components/LandingHero";
import LandingProducts from "./_components/LandingProducts";
import LandingSocials from "./_components/LandingSocials";
import LandingFooter from "./_components/LandingFooter";

import { MaxWidthContainer } from "@/components";

function LandingPage() {
  return (
    <React.Fragment>
      <WebNavigation />

      <LandingHero />
      <section className="grid g-large-10 p-y-large-30">
        <MaxWidthContainer className="w-100 grid g-large-30">
          <LandingProducts />
          <LandingSocials />
        </MaxWidthContainer>
      </section>
      <LandingFooter />
    </React.Fragment>
  );
}

export default LandingPage;
