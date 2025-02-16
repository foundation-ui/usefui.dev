"use client";

import React from "react";
import styled from "styled-components";

// import { useRouter } from "next/navigation";

import SettingsActions from "@/components/triggers/SettingsActions";
import DataDeliveryActions from "@/components/triggers/DataDeliveryActions";
import FunctionListActions from "@/components/triggers/FunctionListActions";

import { Page, Button } from "@foundation-ui/components";
import { Icon } from "../../common/Icons";

const NavWrapper = styled(Page.Menu)`
  border: none !important;
`;

function Navigation() {
  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <div className="flex align-center g-medium-30">
        <FunctionListActions />

        <Button
          variant="border"
          sizing="small"
          className="fs-medium-10"
          rawicon
        >
          <Icon fill="var(--color-orange)">
            <Icon.DataObject />
          </Icon>
          Schema
        </Button>
      </div>

      <div className="flex align-center g-medium-30">
        <SettingsActions />
        <DataDeliveryActions />

        <Button variant="border" sizing="small" className="fs-medium-10">
          <Icon>
            <Icon.Reload />
          </Icon>
          Save
        </Button>
        <Button
          variant="border"
          sizing="small"
          className="fs-medium-10"
          rawicon
        >
          <Icon fill="var(--color-green)">
            <Icon.Run />
          </Icon>
          Run
        </Button>
      </div>
    </NavWrapper>
  );
}

export default Navigation;
