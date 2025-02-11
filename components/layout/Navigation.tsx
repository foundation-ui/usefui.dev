"use client";

import React from "react";
// import { useRouter } from "next/navigation";
import { ColorModeContext } from "@foundation-ui/tokens";

import {
  Page,
  Button,
  DropdownMenu,
  // Divider
} from "@foundation-ui/components";
import { Icon } from "../common/Icons";

function Navigation() {
  //   const router = useRouter();
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);

  return (
    <Page.Navigation className="flex justify-between align-center">
      <div className="flex align-center g-medium-60">
        <h6 className="fs-medium-60">✦</h6>
        <span className="opacity-default-30" style={{ userSelect: "none" }}>
          /
        </span>
        <DropdownMenu.Root>
          <DropdownMenu>
            <DropdownMenu.Trigger variant="border" sizing="small">
              <Icon>
                <Icon.DoubleChevron />
              </Icon>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content sizing="medium">
              <DropdownMenu.Item
                radio
                className="flex align-center g-medium-30 justify-between fs-medium-20"
              >
                Mode
                <span className="flex align-center g-medium-10">
                  <Button
                    sizing="small"
                    variant={colorMode === "light" ? "primary" : "border"}
                    onClick={() => setColorMode("light")}
                  >
                    <Icon>
                      <Icon.Light />
                    </Icon>
                  </Button>
                  <Button
                    sizing="small"
                    variant={colorMode === "dark" ? "primary" : "border"}
                    onClick={() => setColorMode("dark")}
                  >
                    <Icon>
                      <Icon.Dark />
                    </Icon>
                  </Button>
                  <Button
                    sizing="small"
                    variant={colorMode === "system" ? "primary" : "border"}
                    onClick={() => setColorMode("system")}
                  >
                    <Icon>
                      <Icon.Contrast />
                    </Icon>
                  </Button>
                </span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </DropdownMenu.Root>
      </div>
    </Page.Navigation>
  );
}

export default Navigation;
