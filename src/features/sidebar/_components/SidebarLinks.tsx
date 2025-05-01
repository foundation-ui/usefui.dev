"use client";

import React from "react";
import styled from "styled-components";

import { usePathname } from "next/navigation";
import { APP_ROUTES } from "@/routes/routes";

import Link from "next/link";

import { Editor } from "@/features";
import { PixelIcon } from "@foundation-ui/icons";
import { Dialog, Tooltip } from "@foundation-ui/components";

const AppLinkIcon = styled.svg`
  transition: all ease-in-out 0.2s;

  &:hover,
  &:focus {
    fill-opacity: 0.6;
  }
`;

function SidebarLinks() {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <Dialog.Root>
        <Tooltip content="New library">
          <Dialog.Trigger variant="border" sizing="small">
            <PixelIcon>
              <PixelIcon.Plus />
            </PixelIcon>
          </Dialog.Trigger>
        </Tooltip>

        <Editor />
      </Dialog.Root>
      {APP_ROUTES.map(({ key, path, label }) => {
        const isActiveRoute =
          pathname === path ||
          pathname === `/${path}` ||
          (path !== "" && pathname.includes(path));

        return (
          <Tooltip key={key} content={label}>
            <Link href={`/${path}`}>
              <AppLinkIcon as={PixelIcon} fillOpacity={isActiveRoute ? 1 : 0.3}>
                {key === "overview" && <PixelIcon.Map />}
                {key === "workspace" && <PixelIcon.Dashbaord />}
              </AppLinkIcon>
            </Link>
          </Tooltip>
        );
      })}
    </React.Fragment>
  );
}

export default SidebarLinks;
