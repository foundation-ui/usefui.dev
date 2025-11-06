"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { DisplaySmall, Dragbox } from "@/components";
import { Button, ScrollArea } from "@usefui/components";
import { Icon } from "@usefui/icons";

const SectionContainer = styled(motion.section)`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;
const Hgroup = styled(motion.hgroup)`
  width: 100%;
  max-width: var(--breakpoint-mobile);
`;
const CodeContainer = styled(Dragbox.Container)`
  background: var(--body-color) !important;
`;
const CodeBox = styled(Dragbox)`
  background: var(--contrast-color) !important;
  position: absolute;

  @media (max-width: 1240px) {
    transform: translateX(100px);
  }
`;

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

const JSX_TEMPLATE = `import {
  generateAlpha,
  generateColorClasses,
  generateCSSVariables,
  generateDimensionClasses,
  generateFontSizesClasses,
  generateLayoutClasses,
  generateOpacityClasses,
  generateSizeClasses,
} from "@usefui/core";
import { custom_design_tokens } from "@/styles";

const { design_tokens } = custom_design_tokens;
const {  measurement, fontsize, opacity, color } = design_tokens;

const cssLayoutClasses = generateLayoutClasses();
const cssWidthHeightClasses = generateDimensionClasses();
const cssSizeClasses = generateSizeClasses(measurement);
const cssFSClasses = generateFontSizesClasses(fontsize);
const cssOpacityClasses = generateOpacityClasses(opacity);
const cssColorClasses = generateColorClasses(color);

const cssVariables = generateCSSVariables({
  name: 'custom-library,
  design_tokens,
});
`;

function LandingEngines() {
  const router = useRouter();

  return (
    <SectionContainer
      className="p-medium-60 g-large-10 w-100 h-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container}
    >
      <CodeContainer className="flex align-center justify-center">
        <CodeBox sizing="medium">
          <motion.div
            className="h-100 flex flex-column justify-between"
            variants={staggerItem}
          >
            <Dragbox.Header header="@usefui/core" meta="" />
            <ScrollArea
              scrollbar
              className="w-100 h-100 p-l-medium-60 p-y-medium-60 flex flex-column g-medium-30"
            >
              <SyntaxHighlighter
                language="tsx"
                customStyle={{
                  padding: "0",
                  background: "transparent",
                  fontSize: "var(--fontsize-small-50)",
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
                    width: "100%",
                  },
                }}
                PreTag="div"
              >
                {JSX_TEMPLATE}
              </SyntaxHighlighter>
            </ScrollArea>
          </motion.div>
        </CodeBox>
        <Dragbox.Overlay />
      </CodeContainer>

      <Hgroup>
        <motion.span variants={staggerItem}>
          <DisplaySmall as="p" className="m-b-medium-60">
            Generate design tokens, CSS variables, and classes at runtime for
            effortless white-labeling
          </DisplaySmall>
        </motion.span>
        <motion.span variants={staggerItem}>
          <Button
            variant="ghost"
            sizing="medium"
            onMouseDown={() => router.push("/docs/core/installation")}
          >
            Read about engines
            <Icon>
              <Icon.ChevronRight />
            </Icon>
          </Button>
        </motion.span>
      </Hgroup>
    </SectionContainer>
  );
}

export default LandingEngines;
