"use client";

import React from "react";

import { usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/routes/routes";

import { Button } from "@foundation-ui/components";
import { Icon } from "../..";

function AppSidebarHeader() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <React.Fragment>
      <h6 style={{ color: "var(--color-green)" }} className="fs-medium-60">
        ✦
      </h6>
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
            <Icon fillOpacity={isActiveRoute ? 1 : 0.3}>
              {key === "engine" && <Icon.Grid />}
              {key === "templates" && <Icon.Depth />}
              {key === "environments" && <Icon.Globe />}
            </Icon>
          </Button>
        );
      })}
    </React.Fragment>
  );
}

export default AppSidebarHeader;
