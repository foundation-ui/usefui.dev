"use client";

import React from "react";
import styled from "styled-components";

import { Dragbox, Terminal } from "@/components";

const AbsoluteBox = styled(Dragbox)`
  position: absolute;

  &[data-foreground="true"] {
    z-index: 100;
  }

  &[data-position="center"] {
    @media (max-width: 768px) {
      right: calc(var(--measurement-large-60) * -1);
    }
  }

  &[data-position="right"] {
    top: var(--measurement-large-80);
    right: var(--measurement-large-30);
  }
`;

const PACKAGES = [
  "@usefui/analytics",
  "@usefui/components",
  "@usefui/core",
  "@usefui/hooks",
  "@usefui/icons",
  "@usefui/styles",
  "@usefui/tokens",
];

const USEFUI_SCRIPTS = [
  "@usefui/create-fui-app my-app --template nextjs",
  "@usefui/create-fui-app my-app --template nextjs-docs",
];
const SVGJSX_SCRIPTS = [
  "@usefui/svgjsx generate",
  "@usefui/svgjsx generate generate -s ./svg -o ./components/icons",
];
const INSTALL_SCRIPTS = [
  `npm install ${PACKAGES.join(" ")}`,
  `pnpm add ${PACKAGES.join(" ")}`,
  `yarn add ${PACKAGES.join(" ")}`,
  `bun add ${PACKAGES.join(" ")}`,
];

const DEFAULT_COMMANDS = [
  {
    command: "echo",
    description: "Print text",
    exec: (args: string[]) => args.join(" "),
  },
  {
    command: "clear",
    description: "Clear the terminal",
    exec: () => "__CLEAR__",
  },
];
const COMMANDS_PACKAGES = [
  {
    command: "packages",
    description: "Show available packages",
    exec: () => `${PACKAGES.join("\n")}`,
  },
  {
    command: "install",
    description: "Show install scripts",
    exec: () => `${INSTALL_SCRIPTS.join("\n")}`,
  },
  ...DEFAULT_COMMANDS,
];
const COMMANDS_CLI = [
  {
    command: "create-fui-app",
    description: "Show create-fui-app scripts",
    exec: () => `${USEFUI_SCRIPTS.join("\n")}`,
  },
  {
    command: "svgjsx",
    description: "Show svgjsx scripts",
    exec: () => `${SVGJSX_SCRIPTS.join("\n")}`,
  },
  ...DEFAULT_COMMANDS,
];

const HISTORY = [
  {
    input: "packages",
    output: `${PACKAGES.join("\n")}`,
  },
  {
    input: "install",
    output: `${INSTALL_SCRIPTS.join("\n")}`,
  },
];
const TERMINALS = [
  {
    sizing: "medium",
    position: "center",
    header: "@usefui",
    meta: "v.1",
    commands: COMMANDS_PACKAGES,
    history: HISTORY,
  },
  {
    sizing: "small",
    position: "right",
    header: "@usefui",
    meta: "cli",
    commands: COMMANDS_CLI,
    history: [],
  },
];

function LandingHero() {
  const constraintsRef = React.useRef<HTMLDivElement>(null);
  const [foregroundIndex, setForegroundIndex] = React.useState<number | null>(
    null,
  );

  return (
    <Dragbox.Container ref={constraintsRef}>
      {TERMINALS.map((terminal, key) => (
        <AbsoluteBox
          key={key}
          data-position={terminal.position}
          data-foreground={key === foregroundIndex}
          sizing={terminal.sizing}
        >
          <div
            className="h-100 flex flex-column justify-between"
            onPointerDown={() => setForegroundIndex(key)}
          >
            <Dragbox.Header header={terminal.header} meta={terminal.meta} />
            <Terminal commands={terminal.commands} history={terminal.history} />
          </div>
        </AbsoluteBox>
      ))}
    </Dragbox.Container>
  );
}

export default LandingHero;
