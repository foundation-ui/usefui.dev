"use client";

import React from "react";
import styled from "styled-components";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { DisplaySmall, Dragbox } from "@/components";
import { Button, ScrollArea } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const SectionContainer = styled.section`
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
const Hgroup = styled.hgroup`
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

const JSX_TEMPLATE = `import { useColorMode } from "@usefui/tokens";
import { Button, Tooltip } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

function ColorMode() {
  const { setColorMode } = useColorMode();
  return (
    <Tooltip content="System">
      <Button
        id="system-mode-trigger"
        variant="secondary"
        sizing="medium"
        shape="smooth"
        animation="reflective"
        onClick={() => setColorMode('system')}
      >
        <Icon>
          <PixelIcon.Contrast />
        </Icon>
      </Button>
    </Tooltip>
  );
}

export default ColorModes;
`;
function LandingIntegration() {
  const customStyle = {
    padding: "0",
    background: "transparent",
    fontSize: "var(--fontsize-medium-10)",
  };

  return (
    <SectionContainer className="p-medium-60 g-large-10 w-100 h-100">
      <Hgroup>
        <DisplaySmall as="p" className="m-b-medium-60">
          Built with Typescript, Foundation UI can be integrated with your
          favorite React-based frameworks.
        </DisplaySmall>

        <Button variant="ghost" sizing="medium">
          Installation guide
          <Icon>
            <PixelIcon.ChevronRight />
          </Icon>
        </Button>
      </Hgroup>

      <CodeContainer className="flex align-center justify-center">
        <CodeBox sizing="medium">
          <div className="h-100 flex flex-column justify-between">
            <Dragbox.Header header="color-mode.tsx" meta="" />
            <ScrollArea
              scrollbar
              className="w-100 h-100 p-l-medium-60 p-y-medium-60 flex flex-column g-medium-30"
            >
              <SyntaxHighlighter
                language="tsx"
                customStyle={customStyle}
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
          </div>
        </CodeBox>
      </CodeContainer>
    </SectionContainer>
  );
}

export default LandingIntegration;
