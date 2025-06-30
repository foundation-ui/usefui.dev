"use client";

import React from "react";

import { useRouter } from "next/navigation";

import {
  Accordion,
  Avatar,
  Divider,
  Page,
  Toolbar,
  Tooltip,
} from "@foundation-ui/components";
import { Icon, PixelIcon, SocialIcon } from "@foundation-ui/icons";
import { AppLink } from "@/components";
import {
  COMPONENTS_LINKS,
  COMPONENTS_HOOKS_LINKS,
  COLOR_MODE_LINKS,
  DESIGN_TOKENS_LINKS,
  CORE_LINKS,
  ANALYTICS_LINKS,
  ICONS_LINKS,
  COMMUNITY_LINKS,
  COMMON_LINKS,
} from "../_routes";
function DocsSidebar() {
  const router = useRouter();
  const hotkey = "k";
  const binkey = "ctrlKey";

  return (
    <Toolbar.Root>
      <Toolbar
        side="left"
        sizing="large"
        height="auto"
        shortcut
        bindkey={binkey}
        hotkey={hotkey}
        defaultOpen
      >
        <Toolbar.Section
          className="flex align-start justify-start m-b-medium-70"
          showoncollapse
        >
          <Toolbar.Item
            showfirstchild
            className="flex align-center justify-between w-100"
          >
            <Avatar
              style={{
                background: "var(--font-color)",
                borderRadius: "var(--measurement-medium-30)",
              }}
            >
              <Icon fill="var(--body-color)">
                <SocialIcon.Foundation />
              </Icon>
            </Avatar>

            <Tooltip content={`Ctrl + ${hotkey}`}>
              <Toolbar.Trigger variant="ghost" sizing="small">
                <Icon>
                  <PixelIcon.LayoutSidebarLeft />
                </Icon>
              </Toolbar.Trigger>
            </Tooltip>
          </Toolbar.Item>
        </Toolbar.Section>

        <Page.Wrapper $navigations={1.9} $menus={0}>
          <Toolbar.Section className="h-100">
            <div className="grid g-small-30">
              {COMMON_LINKS.map((commonLink, key) => (
                <AppLink
                  key={key}
                  as={Toolbar.Item}
                  onClick={() => router.push(commonLink.link)}
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
                  <b>Components</b>
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
                    >
                      {clink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="components_hooks"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>Components Hooks</b>
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
                      className="fs-medium-20"
                    >
                      {chlink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="design-tokens"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>Design Tokens</b>
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
                      className="fs-medium-20"
                    >
                      {tlink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="color-mode"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>Color Mode</b>
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
                      className="fs-medium-20"
                    >
                      {cmlink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="core"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>Core</b>
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
                      className="fs-medium-20"
                    >
                      {coreLink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="icons"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>Icons</b>
                  <Icon>
                    <PixelIcon.ChevronsVertical />
                  </Icon>
                </Accordion.Trigger>
                <Accordion.Content
                  value="icons"
                  defaultOpen
                  className="grid g-small-30"
                >
                  {ICONS_LINKS.map((iconLink, key) => (
                    <AppLink
                      key={key}
                      as={Toolbar.Item}
                      onClick={() => router.push(iconLink.link)}
                      className="fs-medium-20"
                    >
                      {iconLink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="uba"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>User Behavior Analytics</b>
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
                      className="fs-medium-20"
                    >
                      {alink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>

            <Divider className="m-y-medium-60" />

            <Accordion.Root>
              <Accordion>
                <Accordion.Trigger
                  value="community"
                  className="m-b-medium-60 w-100 justify-between align-center"
                >
                  <b>Community</b>
                  <Icon>
                    <PixelIcon.ChevronsVertical />
                  </Icon>
                </Accordion.Trigger>
                <Accordion.Content
                  value="community"
                  defaultOpen
                  className="grid g-small-30"
                >
                  {COMMUNITY_LINKS.map((communityLink, key) => (
                    <AppLink
                      key={key}
                      as={Toolbar.Item}
                      onClick={() =>
                        communityLink.external
                          ? window.open(
                              communityLink.link,
                              "_blank",
                              "noopener,noreferrer",
                            )
                          : router.push(communityLink.link)
                      }
                      className="fs-medium-20"
                    >
                      {communityLink.label}
                    </AppLink>
                  ))}
                </Accordion.Content>
              </Accordion>
            </Accordion.Root>
          </Toolbar.Section>
        </Page.Wrapper>
      </Toolbar>
    </Toolbar.Root>
  );
}

export default DocsSidebar;
