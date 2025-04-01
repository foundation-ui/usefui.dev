"use client";

import React from "react";
import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/routes/routes";

import { Editor } from "@/features";
import { Icon } from "@foundation-ui/icons";
import { Button, Dialog, Tooltip } from "@foundation-ui/components";

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
    <React.Fragment>
      <Dialog.Root>
        <Tooltip content="New Library">
          <Dialog.Trigger sizing="small" variant="border">
            <span className="flex align-center justify-center p-y-small-30">
              <Icon>
                <Icon.Add />
              </Icon>
            </span>
          </Dialog.Trigger>
        </Tooltip>

        <Editor />
      </Dialog.Root>
      {APP_ROUTES.map(({ key, path, label }) => {
        const isActiveRoute =
          pathname === path ||
          pathname === `/${path}` ||
          (path !== "/" && pathname.includes(path));

        return (
          <Tooltip key={key} content={label}>
            <Button
              variant="ghost"
              onClick={() => router.push(path)}
              rawicon
              disabled={key !== "library"}
            >
              <AppLinkIcon as={Icon} fillOpacity={isActiveRoute ? 1 : 0.3}>
                {key === "library" && <Icon.Models />}
                {key === "integrations" && <Icon.Webhook />}
                {key === "history" && <Icon.Activity />}
                {key === "support" && <Icon.Help />}
                {key === "feedback" && <Icon.Chat />}
              </AppLinkIcon>
            </Button>
          </Tooltip>
        );
      })}
    </React.Fragment>
  );
}

export default SidebarLinks;
