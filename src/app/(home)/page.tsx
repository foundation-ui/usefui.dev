"use client";

import React from "react";

import LandingHeader from "./_components/LandingHeader";
import LandingIntegration from "./_components/LandingIntegration";
import LandingProducts from "./_components/LandingProducts";
import LandingEngines from "./_components/LandingEngines";
import LandingCallToAction from "./_components/LandingCallToAction";

import { Page, ScrollArea } from "@usefui/components";
import { LandingNavigation, Footer, MaxWidthContainer } from "@/components";

function LandingPage() {
  return (
    <Page className="h-100 w-100">
      <Page.Content>
        <ScrollArea className="w-100 h-100" scrollbar>
          <LandingNavigation />
          <LandingHeader />

          <MaxWidthContainer className="p-x-medium-30 w-100 grid p-y-large-30 g-large-30">
            <LandingIntegration />
            <LandingProducts />
            <LandingEngines />
          </MaxWidthContainer>

          <LandingCallToAction />

          <MaxWidthContainer className="p-x-medium-60 p-y-large-10 ">
            <Footer />
          </MaxWidthContainer>
        </ScrollArea>
      </Page.Content>
    </Page>
  );
}

export default LandingPage;
