"use client";

import React from "react";
import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/routes/routes";

import { Button, Toolbar } from "@foundation-ui/components";
import { Icon } from "../..";

const AppLinkIcon = styled.svg`
  transition: all ease-in-out 0.2s;

  &:hover,
  &:focus {
    fill-opacity: 0.6;
  }
`;

function SidebarLinks() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Toolbar.Section showoncollapse className="h-100">
      <h6
        style={{ color: "var(--color-green)" }}
        className="fs-medium-60 m-b-medium-60"
      >
        ✦
      </h6>

      <div className="grid g-medium-60">
        {APP_ROUTES.map(({ key, path }) => {
          const isActiveRoute =
            pathname === path ||
            pathname === `/${path}` ||
            (path !== "/" && pathname.includes(path));

          return (
            <Button
              key={key}
              variant="ghost"
              onClick={() => router.push(path)}
              rawicon
            >
              <AppLinkIcon as={Icon} fillOpacity={isActiveRoute ? 1 : 0.3}>
                {key === "engine" && <Icon.Grid />}
                {key === "templates" && <Icon.Depth />}
                {key === "environments" && <Icon.Globe />}
              </AppLinkIcon>
            </Button>
          );
        })}
      </div>
    </Toolbar.Section>
  );
}

export default SidebarLinks;
