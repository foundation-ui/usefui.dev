"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/routes/routes";

import { Button } from "@foundation-ui/components";
import { Icon } from "..";

function AppSidebarHeader() {
  const router = useRouter();

  return (
    <React.Fragment>
      <h6 style={{ color: "var(--color-green)" }} className="fs-medium-60">
        ✦
      </h6>
      {APP_ROUTES.map(({ key, path }) => (
        <Button key={key} variant="ghost" onClick={() => router.push(path)}>
          <Icon>
            {key === "engine" && <Icon.Grid />}
            {key === "templates" && <Icon.Depth />}
          </Icon>
        </Button>
      ))}
    </React.Fragment>
  );
}

export default AppSidebarHeader;
