"use client";

import React from "react";
import styled from "styled-components";

import { useRouter } from "next/navigation";

import { Button, Page } from "@foundation-ui/components";
import { Icon } from "@/components";

const NavWrapper = styled(Page.Menu)`
  border: none !important;
`;

function Navigation() {
  const router = useRouter();

  return (
    <NavWrapper className="flex justify-between align-center p-r-medium-60">
      <div className="flex align-center g-medium-30">
        <Button
          className="fs-medium-20"
          variant="ghost"
          onClick={() => router.push("")}
        >
          <Icon>
            <Icon.DoubleChevron />
          </Icon>
        </Button>
      </div>

      <div className="flex align-center g-medium-30">
        <Button
          className="fs-medium-20"
          variant="ghost"
          onClick={() => router.push("")}
        >
          Docs
        </Button>
        <Button
          className="fs-medium-20"
          variant="ghost"
          onClick={() => router.push("")}
        >
          Feedback
        </Button>
      </div>
    </NavWrapper>
  );
}

export default Navigation;
