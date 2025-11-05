"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

import { DisplayMd, DisplaySmall } from "@/components";
import { Button, ScrollArea } from "@usefui/components";
import { Icon } from "@usefui/icons";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const SectionContainer = styled(motion.article)`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
const Hgroup = styled.hgroup`
  width: 100%;
  max-width: var(--breakpoint-mobile);
`;
const FixedWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const BackgroundContainer = styled(ScrollArea)`
  position: relative;
  width: 100%;
  height: var(--measurement-large-90);
  border-radius: var(--measurement-medium-30);
  background-color: var(--body-color);

  align-self: flex-end;
  justify-self: end;

  overflow-x: hidden;

  .language-tsx {
    position: absolute;
    background-color: transparent !important;
  }
`;
const BackgroundOverlay = styled.div`
  position: absolute;
  z-index: 10;
  user-select: none;
  pointer-events: none;
  background: linear-gradient(0deg, var(--body-color) 10%, transparent 100%);
  height: 100%;
  width: 100%;
`;
const Grid = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31%, 1fr));
  grid-gap: var(--measurement-large-10) var(--measurement-large-10);
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

const WIKI_CATALOG = [
  {
    name: "usefui/core",
    title: "Token Engine",
    description:
      "Dynamically generate design tokens using application properties.",
    link: "/docs/core/installation",
    label: "Read more about engines",
    code: `import {
  HEXToHSL,
  HEXToRGB,
  MeasurementRatios,
  PXToPT,
  PXToREM,
  RGBAToHEX,
  RGBToHSL,
  applyColorLuminance,
  calculateContrastScore,
  calculateStackOrder,
  generateAlpha,
  generateCSSVariables,
  generateColorClasses,
  generateColorTokens,
  generateDimensionClasses,
  generateFontSizesClasses,
  generateLayoutClasses,
  generateMeasurementTokens,
  generateModularScales,
  generateOpacityClasses,
  generateSequenceTokens,
  generateSequenceVariation,
  generateSequences,
  generateSizeClasses,
  generateTokensFromTemplate,
  generateTokensLibrary,
  generateVariation,
  getContrastRatio,
  getRelativeLuminance,
  getSequenceUsages,
  luminanceAmountFormatter,
  setLuminanceTone,
} from "@usefui/core";
`,
  },
  {
    name: "usefui/components",
    title: "React Components",
    description:
      "Use fast and accessible components to enhance your UI development.",
    link: "/docs/components/installation",
    label: "Explore components",
    code: `function CustomDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu>
        <DropdownMenu.Trigger
          variant="secondary"
          sizing="small"
          animation="reflective"
        >
          <Icon>
            <Icon.Tools />
          </Icon>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content>
          <DropdownMenu.Item>
            Community
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </DropdownMenu.Root>
  );
}`,
  },
  {
    name: "usefui/analytics",
    title: "User Behavior Analytics",
    description: "Capture real-time user interactions and system insights.",
    link: "/docs/uba/installation",
    label: "Learn about UBA",
    code: `{
    "session": {
        "entry_time": "2025-07-06T00:45:02.968Z",
        "entry_epoch": 1751762702968,
        "last_interaction_time": "2025-07-06T00:45:02.967Z",
        "last_interaction_epoch": 1751762702967,
        "time_before_interact": 0.316,
        "html_snapshot": "..."
    },
    "interactions": [
        {
            "origin": "drag-handle",
            "frequency": 1,
            "events": [
                {
                    "type": "mouseover",
                    "occured_at": "2025-07-06T00:45:02.148Z",
                    "occured_at_epoch": 1751762702148,
                    "dimension": {
                        "width": 11.9375,
                        "height": 876.578125
                    },
                    "position": {
                        "x": 541.765625,
                        "y": 56.453125,
                        "top": 56.453125,
                        "right": 553.703125,
                        "bottom": 933.03125,
                        "left": 541.765625
                    }
                }
            ],
            "types": [
                "mouseover"
            ]
        }
    ],
    "system": {
        "path": "...",
        "user_agent": "...",
        "device_os": "...",
        "viewport": {
            "width": 1039,
            "height": 937
        },
        "performances": {
            "memory_usage": "39.18MB",
            "network_latency": "6.30ms"
        },
        "screen": {
            "width": 3440,
            "height": 1358,
            "pixel_depth": 24,
            "orientation": {
                "angle": 0,
                "type": "landscape-primary"
            }
        }
    }
}`,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};
const staggerItem = {
  hidden: { opacity: 0, y: "var(--measurement-medium-10)" },
  show: { opacity: 1, y: 0 },
};

function LandingProducts() {
  const router = useRouter();

  return (
    <motion.section
      className="flex flex-column g-medium-60"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <hgroup className="flex align-end flex-wrap justify-between g-medium-60">
        <motion.span variants={staggerItem}>
          <DisplayMd>Production-ready libraries</DisplayMd>
        </motion.span>
        <motion.span variants={staggerItem}>
          <Button
            variant="ghost"
            sizing="medium"
            onMouseDown={() => router.push("/docs/introduction")}
          >
            Explore all libraries
            <Icon>
              <Icon.ArrowRight />
            </Icon>
          </Button>
        </motion.span>
      </hgroup>

      <Grid>
        {WIKI_CATALOG.map((item, key) => (
          <SectionContainer
            key={`${item?.link}-${key}`}
            className="p-medium-60 g-large-10 w-100 h-100"
            variants={staggerItem}
          >
            <Hgroup>
              <DisplaySmall as="p" className="fs-medium-20 m-b-medium-10">
                {item?.title}
              </DisplaySmall>
              <DisplaySmall
                as="p"
                className="fs-medium-20 m-b-medium-60 opacity-default-60 "
              >
                {item?.description}
              </DisplaySmall>
              <Button
                variant="ghost"
                sizing="medium"
                onMouseDown={() => router.push(item.link)}
              >
                {item?.label}
                <Icon>
                  <Icon.ChevronRight />
                </Icon>
              </Button>
            </Hgroup>

            <FixedWrapper className="w-100 h-100">
              <BackgroundOverlay />
              <BackgroundContainer className="p-medium-60">
                <SyntaxHighlighter
                  language="tsx"
                  customStyle={{
                    padding: "0",
                    background: "transparent",
                    fontSize: "var(--fontsize-small-50)",
                    overflow: "hidden",
                  }}
                  style={oneDark}
                  lineNumberStyle={{
                    paddingRight: "var(--measurement-medium-10)",
                    textAlign: "right",
                    userSelect: "none",
                    opacity: 0.6,
                  }}
                  wrapLines={true}
                  lineProps={{
                    style: {
                      fontFamily: "var(--font-mono)",
                      backgroundColor: "transparent",
                      display: "block",
                      wordBreak: "break-word",
                      width: "fit-content",
                    },
                  }}
                  PreTag="div"
                >
                  {item.code}
                </SyntaxHighlighter>
              </BackgroundContainer>
            </FixedWrapper>
          </SectionContainer>
        ))}
      </Grid>
    </motion.section>
  );
}

export default LandingProducts;
