"use client";

import React from "react";
import styled from "styled-components";

import { motion, type Variants } from "framer-motion";

import SplitText from "../split-text";

import { Button, Divider, Field, ScrollArea } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

const TerminalPrompt = styled.form`
  padding: 0 var(--measurement-medium-30);
`;

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const slide: Variants = {
  hidden: {
    opacity: 0,
    y: -3,
  },
  visible: {
    opacity: 0.3,
    y: 0,
  },
};
const slideEmphasis: Variants = {
  hidden: {
    opacity: 0,
    y: -3,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const PACKAGES = [
  "@usefui/analytics",
  "@usefui/components",
  "@usefui/core",
  "@usefui/hooks",
  "@usefui/icons",
  "@usefui/styles",
  "@usefui/tokens",
];
const SCRIPTS = [
  "@usefui/create-fui-app my-app --template nextjs",
  "@usefui/create-fui-app my-app --template nextjs-docs",
  "@usefui/svgjsx generate",
  "@usefui/svgjsx generate generate -s ./svg -o ./components/icons",
];
const COMMANDS = [
  {
    command: "packages",
    description: "Show available packages",
    exec: () => `${PACKAGES.join("\n")}`,
  },
  {
    command: "install",
    description: "Show install scripts",
    exec: () =>
      `npm install ${PACKAGES.join(" ")}\npnpm add ${PACKAGES.join(" ")}\nyarn add ${PACKAGES.join(" ")}\nbun add ${PACKAGES.join(" ")}`,
  },
  {
    command: "cli",
    description: "Show CLI scripts",
    exec: () => `${SCRIPTS.join("\n")}`,
  },
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
const DEFAULT_HISTORY = [
  {
    input: "packages",
    output: `${PACKAGES.join("\n")}`,
  },
  {
    input: "install",
    output: `npm install ${PACKAGES.join(" ")}\npnpm add ${PACKAGES.join(" ")}\nyarn add ${PACKAGES.join(" ")}\nbun add ${PACKAGES.join(" ")}`,
  },
  {
    input: "cli",
    output: `${SCRIPTS.join("\n")}`,
  },
];

function parseCommand(input: string) {
  const [cmd, ...args] = input.trim().split(/\s+/);
  return { cmd, args };
}

function Terminal() {
  const [input, setInput] = React.useState("");

  const [history, setHistory] =
    React.useState<{ input: string; output: string }[]>(DEFAULT_HISTORY);

  const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState<number | null>(null);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleCommand = (rawInput: string) => {
    if (!rawInput.trim()) return;
    const { cmd, args } = parseCommand(rawInput);
    const command = COMMANDS.find((c) => c.command === cmd);
    if (!command) {
      setHistory((h) => [
        ...h,
        { input: rawInput, output: `Command not found: ${cmd}` },
      ]);
      return;
    }
    const result = command.exec(args);
    if (result === "__CLEAR__") {
      setHistory([]);
      return;
    }
    setHistory((h) => [...h, { input: rawInput, output: result }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setCommandHistory((h) => (input.trim() ? [...h, input] : h));
    setHistoryIndex(null);
    setInput("");
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "ArrowUp") {
  //     if (commandHistory.length === 0) return;
  //     setHistoryIndex((idx) => {
  //       const newIndex =
  //         idx === null ? commandHistory.length - 1 : Math.max(0, idx - 1);
  //       setInput(String(commandHistory[newIndex]));
  //       return newIndex;
  //     });
  //     e.preventDefault();
  //   } else if (e.key === "ArrowDown") {
  //     if (commandHistory.length === 0) return;
  //     setHistoryIndex((idx) => {
  //       if (idx === null) return null;
  //       const newIndex = Math.min(commandHistory.length - 1, idx + 1);
  //       setInput(commandHistory[newIndex] || "");
  //       return newIndex === commandHistory.length ? null : newIndex;
  //     });
  //     e.preventDefault();
  //   }
  // };

  React.useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  return (
    <React.Fragment>
      <motion.header
        className="grid g-medium-10 fs-small-50 p-medium-60"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.kbd className="opacity-default-30 m-b-medium-30">
          <SplitText
            stagger={0.02}
            duration={0.1}
            variant="fade"
            text="Available commands:"
          />
        </motion.kbd>
        {COMMANDS.map((cmd) => (
          <kbd key={cmd.command}>
            <SplitText
              stagger={0.02}
              delay={0.2}
              duration={0.1}
              variant="fade"
              text={`${cmd.command}: `}
            />
            <motion.span variants={slide}>
              <SplitText
                stagger={0.02}
                delay={0.2}
                duration={0.1}
                variant="fade"
                text={cmd.description}
              />
            </motion.span>
          </kbd>
        ))}
      </motion.header>

      <Divider />

      <ScrollArea
        scrollbar
        ref={scrollRef}
        className="w-100 h-100 p-medium-60 flex flex-column g-medium-30"
      >
        {history.map((entry, idx) => (
          <React.Fragment key={idx}>
            <div className="flex align-end g-medium-10 fs-small-50 ">
              <kbd className="opacity-default-30">
                <SplitText
                  stagger={0.02}
                  duration={0.1}
                  variant="fade"
                  text="$"
                />
              </kbd>

              <span className="flex align-center g-medium-10">
                <kbd className="opacity-default-60">
                  <SplitText
                    stagger={0.02}
                    duration={0.1}
                    variant="fade"
                    text={entry.input}
                  />
                </kbd>
              </span>
            </div>

            <motion.kbd
              className="fs-small-50 opacity-default-30 m-b-medium-30"
              variants={slideEmphasis}
              initial="hidden"
              animate="visible"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {entry.output}
            </motion.kbd>
          </React.Fragment>
        ))}
      </ScrollArea>

      <Divider />

      <footer className="p-b-medium-30 p-x-medium-30">
        <TerminalPrompt
          onSubmit={handleSubmit}
          className="flex align-center justify-between g-medium-30 w-100"
        >
          <div className="flex align-center g-medium-30 w-100">
            <kbd className="fs-medium-10 opacity-default-30">$</kbd>
            <Field
              value={input}
              onChange={(e) => setInput(e.target.value)}
              // onKeyDown={handleKeyDown}
              aria-label="Terminal input"
              autoComplete="off"
              variant="ghost"
              sizing="small"
              placeholder="Type a command"
              style={{
                fontFamily: "var(--font-mono) !important",
                width: "100%",
              }}
            />
          </div>

          <Button
            type="submit"
            variant="tertiary"
            sizing="small"
            animation="reflective"
          >
            <span className="flex align-center justify-center p-y-small-90">
              <Icon>
                <PixelIcon.CornerDownRight />
              </Icon>
            </span>
          </Button>
        </TerminalPrompt>
      </footer>
    </React.Fragment>
  );
}

export default Terminal;
