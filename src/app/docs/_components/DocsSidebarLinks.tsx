"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Accordion, Divider, Toolbar } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";
import { AppLink } from "@/components";
import {
  COMPONENTS_LINKS,
  COMPONENTS_HOOKS_LINKS,
  COLOR_MODE_LINKS,
  DESIGN_TOKENS_LINKS,
  CORE_LINKS,
  ANALYTICS_LINKS,
  COMMON_LINKS,
} from "../_routes";

function DocsSidebarLinks() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <React.Fragment>
      <div className="grid g-small-30">
        {COMMON_LINKS.map((commonLink, key) => (
          <AppLink
            key={key}
            as={Toolbar.Item}
            onClick={() => router.push(commonLink.link)}
            data-current={commonLink.link === pathname}
            className="fs-medium-20"
          >
            {commonLink.label}
          </AppLink>
        ))}
      </div>

      <Divider className="m-y-medium-60" />

      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="components"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Components
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="components"
            defaultOpen
            className="grid g-small-30"
          >
            {COMPONENTS_LINKS.map((clink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(clink.link)}
                className="fs-medium-20"
                data-current={clink.link === pathname}
              >
                {clink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>

      <Divider className="m-y-medium-70" />

      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="components_hooks"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Components Hooks
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="components_hooks"
            defaultOpen
            className="grid g-small-30"
          >
            {COMPONENTS_HOOKS_LINKS.map((chlink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(chlink.link)}
                data-current={chlink.link === pathname}
                className="fs-medium-20"
              >
                {chlink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>

      <Divider className="m-y-medium-70" />

      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="design-tokens"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Design Tokens
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="design-tokens"
            defaultOpen
            className="grid g-small-30"
          >
            {DESIGN_TOKENS_LINKS.map((tlink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(tlink.link)}
                data-current={tlink.link === pathname}
                className="fs-medium-20"
              >
                {tlink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>

      <Divider className="m-y-medium-70" />

      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="color-mode"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Color Mode
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="color-mode"
            defaultOpen
            className="grid g-small-30"
          >
            {COLOR_MODE_LINKS.map((cmlink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(cmlink.link)}
                data-current={cmlink.link === pathname}
                className="fs-medium-20"
              >
                {cmlink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>

      <Divider className="m-y-medium-70" />

      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="core"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Core
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="core"
            defaultOpen
            className="grid g-small-30"
          >
            {CORE_LINKS.map((coreLink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(coreLink.link)}
                data-current={coreLink.link === pathname}
                className="fs-medium-20"
              >
                {coreLink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>

      <Divider className="m-y-medium-70" />

      <Accordion.Root>
        <Accordion>
          <Accordion.Trigger
            value="uba"
            className="m-b-medium-60 w-100 justify-between align-center"
          >
            Behavior Analytics
            <Icon>
              <PixelIcon.ChevronsVertical />
            </Icon>
          </Accordion.Trigger>
          <Accordion.Content
            value="uba"
            defaultOpen
            className="grid g-small-30"
          >
            {ANALYTICS_LINKS.map((alink, key) => (
              <AppLink
                key={key}
                as={Toolbar.Item}
                onClick={() => router.push(alink.link)}
                data-current={alink.link === pathname}
                className="fs-medium-20"
              >
                {alink.label}
              </AppLink>
            ))}
          </Accordion.Content>
        </Accordion>
      </Accordion.Root>
    </React.Fragment>
  );
}

export default DocsSidebarLinks;
