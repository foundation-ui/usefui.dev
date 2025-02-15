"use client";

import React from "react";
import styled from "styled-components";
// import { useRouter } from "next/navigation";
import { ColorModeContext } from "@foundation-ui/tokens";

import {
  Page,
  Button,
  DropdownMenu,
  ScrollArea,
} from "@foundation-ui/components";
import { Icon } from "./Icons";

const NavWrapper = styled(Page.Menu)`
  /* border: none !important; */
`;
function Navigation() {
  //   const router = useRouter();
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);

  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <DropdownMenu.Root>
        <DropdownMenu>
          <DropdownMenu.Trigger
            variant="border"
            sizing="medium"
            className="fs-medium-10"
          >
            <Icon>
              <Icon.DoubleChevron />
            </Icon>
            Generate Library
          </DropdownMenu.Trigger>
          <ScrollArea as={DropdownMenu.Content} sizing="large">
            <DropdownMenu.Item>Library</DropdownMenu.Item>
            <DropdownMenu.Item>Colors</DropdownMenu.Item>
            <DropdownMenu.Item>Font Sizes</DropdownMenu.Item>
            <DropdownMenu.Item>Measurements</DropdownMenu.Item>
            <DropdownMenu.Item>Opacity</DropdownMenu.Item>
            <DropdownMenu.Item>Depths</DropdownMenu.Item>
            <DropdownMenu.Item>Color Alphas</DropdownMenu.Item>
            <DropdownMenu.Item>Color Shades</DropdownMenu.Item>
            <DropdownMenu.Item>Color Tints</DropdownMenu.Item>
            <DropdownMenu.Item>Contrast Scores</DropdownMenu.Item>
            <DropdownMenu.Item>Modular Scale</DropdownMenu.Item>
            <DropdownMenu.Item>Px to Rem</DropdownMenu.Item>
            <DropdownMenu.Item>Px to pt</DropdownMenu.Item>
            <DropdownMenu.Item>Rem to Px</DropdownMenu.Item>
            <DropdownMenu.Item>Pt to Px</DropdownMenu.Item>
            <DropdownMenu.Item>Pt to Rem</DropdownMenu.Item>
            <DropdownMenu.Item>Hex to RGB</DropdownMenu.Item>
            <DropdownMenu.Item>Hex to RGBA</DropdownMenu.Item>
            <DropdownMenu.Item>Hex to HSL</DropdownMenu.Item>
            <DropdownMenu.Item>RGB to HSL</DropdownMenu.Item>
          </ScrollArea>
        </DropdownMenu>
      </DropdownMenu.Root>
      <div className="flex align-center g-medium-60">
        <Button variant="primary" sizing="medium" className="fs-medium-10">
          <Icon>
            <Icon.Run />
          </Icon>
          Execute
        </Button>

        <DropdownMenu.Root>
          <DropdownMenu>
            <DropdownMenu.Trigger
              variant="ghost"
              sizing="small"
              className="fs-medium-10"
            >
              <Icon>
                <Icon.More />
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
                    variant={colorMode === "light" ? "mono" : "border"}
                    onClick={() => setColorMode("light")}
                  >
                    <Icon>
                      <Icon.Light />
                    </Icon>
                  </Button>
                  <Button
                    sizing="small"
                    variant={colorMode === "dark" ? "mono" : "border"}
                    onClick={() => setColorMode("dark")}
                  >
                    <Icon>
                      <Icon.Dark />
                    </Icon>
                  </Button>
                  <Button
                    sizing="small"
                    variant={colorMode === "system" ? "mono" : "border"}
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
    </NavWrapper>
  );
}

export default Navigation;
