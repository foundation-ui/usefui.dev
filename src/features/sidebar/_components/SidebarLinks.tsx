"use client";

import React from "react";
import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";
import { APP_ROUTES } from "@/routes/routes";

import { Editor } from "@/features";
import { Icon } from "@foundation-ui/icons";
import { Button, Dialog, Divider, Tooltip } from "@foundation-ui/components";

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
    <div className="grid align-center justify-center g-medium-60">
      <Dialog.Root>
        <Tooltip content="Editor">
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

      <div className="grid align-start justify-center g-medium-60">
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
                disabled
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
      </div>
    </div>
  );
}

export default SidebarLinks;
