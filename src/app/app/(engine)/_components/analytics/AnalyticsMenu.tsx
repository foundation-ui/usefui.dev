"use client";

import React from "react";
import styled from "styled-components";

import AnalyticsMeta from "./AnalyticsMeta";
import { Toolbar } from "@foundation-ui/components";

const MenuWrapper = styled(Toolbar)`
  /* border: none !important; */
  padding: var(--measurement-medium-30) 0 !important;
  align-self: end !important;
`;

function AnalyticsMenu({ data }: { data: string }) {
  return (
    <Toolbar.Root>
      <MenuWrapper side="bottom" defaultOpen={false}>
        <Toolbar.Section showoncollapse className="p-medium-30">
          <AnalyticsMeta data={data} />
        </Toolbar.Section>
      </MenuWrapper>
    </Toolbar.Root>
  );
}

export default AnalyticsMenu;
