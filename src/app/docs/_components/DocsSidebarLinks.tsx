"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Accordion, Divider, Toolbar, useSheet } from "@usefui/components";
import { Icon } from "@usefui/icons";
import { AppLink } from "@/components";

import {
  COMPONENTS_LINKS,
  COMPONENTS_HOOKS_LINKS,
  COLOR_MODE_LINKS,
  DESIGN_TOKENS_LINKS,
  CORE_LINKS,
  ANALYTICS_LINKS,
  COMMON_LINKS,
  ICONS_LINKS,
} from "../_routes";

const SIDEBAR_LINKS = [
  {
    title: "Components",
    value: "components",
    links: COMPONENTS_LINKS,
  },
  {
    title: "Components Hooks",
    value: "components_hooks",
    links: COMPONENTS_HOOKS_LINKS,
  },
  {
    title: "Icons",
    value: "icons",
    links: ICONS_LINKS,
  },
  {
    title: "Design Tokens",
    value: "design_tokens",
    links: DESIGN_TOKENS_LINKS,
  },
  {
    title: "Color Mode",
    value: "color_mode",
    links: COLOR_MODE_LINKS,
  },
  {
    title: "Core",
    value: "core",
    links: CORE_LINKS,
  },
  {
    title: "Behavior Analytics",
    value: "uba",
    links: ANALYTICS_LINKS,
  },
];

function DocsSidebarLinks() {
  const router = useRouter();
  const pathname = usePathname();

  const { methods } = useSheet();
  const { setOpen } = methods;

  const handleRedirect = (link: string) => {
    router.push(link);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (setOpen) setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="grid g-small-30 m-b-medium-60">
        {COMMON_LINKS.map((commonLink, key) => (
          <AppLink
            key={key}
            as={Toolbar.Item}
            onClick={() => handleRedirect(commonLink.link)}
            data-current={commonLink.link === pathname}
            className="fs-medium-10"
          >
            {commonLink.label}
          </AppLink>
        ))}
      </div>

      <Divider className="m-y-medium-60" />

      {SIDEBAR_LINKS.map((item, key) => (
        <Accordion.Root key={item.value}>
          <Accordion>
            <Accordion.Trigger
              value={item.value}
              variant="ghost"
              className="m-b-medium-60 w-100 justify-between align-center "
            >
              <span className="fs-medium-10">{item.title}</span>
              <Icon>
                <Icon.ChevronSelectorVertical />
              </Icon>
            </Accordion.Trigger>
            <Accordion.Content
              defaultOpen
              value={item.value}
              className={`grid g-small-30 ${key !== SIDEBAR_LINKS.length - 1 && "m-b-medium-60"}`}
            >
              {item.links.map((link, key) => (
                <AppLink
                  key={key}
                  as={Toolbar.Item}
                  onClick={() => handleRedirect(link.link)}
                  data-current={link.link === pathname}
                  className="fs-medium-10"
                >
                  {link.label}
                </AppLink>
              ))}
            </Accordion.Content>
          </Accordion>
        </Accordion.Root>
      ))}
    </React.Fragment>
  );
}

export default DocsSidebarLinks;
