"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

import { BrandIcon, DisplaySmall, SplitText } from "@/components";
import { Breadcrumb, Button, DropdownMenu, Page } from "@usefui/components";
import { Icon, SocialIcon } from "@usefui/icons";
import Link from "next/link";

const NavWrapper = styled(Page.Navigation)`
  border: none;
  background-color: var(--body-color);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  z-index: var(--depth-default-100);
`;
const ResponsiveLabel = styled(DisplaySmall)`
  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
    user-select: none;
    pointer-events: none;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: "var(--measurement-medium-10)" },
  show: { opacity: 1, y: 0 },
};

function Navigation() {
  const router = useRouter();

  return (
    <NavWrapper className="flex justify-between align-center g-medium-30">
      <div className="flex align-center g-medium-60">
        <div className="flex align-center g-medium-10">
          <Button variant="ghost" rawicon onMouseDown={() => router.push("/")}>
            <Icon fill="none" width={24} height={24} viewBox="0 0 32 48">
              <BrandIcon />
            </Icon>
          </Button>
          <ResponsiveLabel className="fs-medium-10">
            <SplitText duration={0.1} variant="fade" text="Foundation UI" />
          </ResponsiveLabel>
        </div>

        <motion.div
          className="flex align-center g-medium-50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={container}
        >
          <motion.span variants={staggerItem}>
            <Breadcrumb.Separator />
          </motion.span>
          <motion.span variants={staggerItem}>
            <DropdownMenu.Root>
              <DropdownMenu>
                <DropdownMenu.Trigger
                  variant="ghost"
                  sizing="small"
                  className="fs-medium-10"
                >
                  <span className="flex align-center">
                    CLI
                    <Icon>
                      <Icon.ChevronDown />
                    </Icon>
                  </span>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content sizing="medium">
                  <DropdownMenu.Item
                    onMouseDown={() => router.push("/docs/cli")}
                    className="flex flex-column g-small-10"
                  >
                    <span className="fs-medium-10">usefui/create-fui-app</span>
                    <span className="fs-medium-10 opacity-default-60">
                      Start a typesafe Next.js app
                    </span>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onMouseDown={() =>
                      router.push("/docs/icons-cli/introduction")
                    }
                    className="flex flex-column g-small-10"
                  >
                    <span className="fs-medium-10">usefui/svgjsx</span>
                    <span className="fs-medium-10 opacity-default-60">
                      SVG files to React components
                    </span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </DropdownMenu.Root>
          </motion.span>
          <motion.span variants={staggerItem}>
            <DropdownMenu.Root>
              <DropdownMenu>
                <DropdownMenu.Trigger
                  variant="ghost"
                  sizing="small"
                  className="fs-medium-10"
                >
                  <span className="flex align-center">
                    Products
                    <Icon>
                      <Icon.ChevronDown />
                    </Icon>
                  </span>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content sizing="medium">
                  <Link
                    href="https://runp.dev"
                    target="_blank"
                    rel="noopener"
                    style={{ textDecoration: "none" }}
                  >
                    <DropdownMenu.Item className="flex flex-column g-small-10">
                      <span className="fs-medium-10">Runp AI</span>
                      <span className="fs-medium-10 opacity-default-60">
                        Create UI with AI workflows.
                      </span>
                    </DropdownMenu.Item>
                  </Link>
                  <DropdownMenu.Item
                    onMouseDown={() => router.push("/app")}
                    className="flex flex-column g-small-10"
                  >
                    <span className="fs-medium-10">Design Tokens Engine</span>
                    <span className="fs-medium-10 opacity-default-60">
                      Generate JSON Design Tokens.
                    </span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu>
            </DropdownMenu.Root>
          </motion.span>
          <motion.span variants={staggerItem}>
            <Button
              variant="ghost"
              sizing="small"
              onMouseDown={() => router.push("/docs/introduction")}
            >
              Docs
            </Button>
          </motion.span>
        </motion.div>
      </div>

      <Button
        variant="secondary"
        sizing="small"
        animation="reflective"
        onClick={() =>
          window.open(
            "https://github.com/foundation-ui",
            "_blank",
            "noopener,noreferrer",
          )
        }
      >
        <span className="p-y-small-60 flex align-center justify-center">
          <Icon viewBox="0 0 14 14">
            <SocialIcon.Github />
          </Icon>
        </span>
        Github
      </Button>
    </NavWrapper>
  );
}

export default Navigation;
