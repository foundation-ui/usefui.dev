"use client";

import React from "react";
import styled from "styled-components";
import { motion, type Variants } from "framer-motion";

import { useRouter } from "next/navigation";

import LandingHero from "./LandingHero";

import { Button } from "@usefui/components";
import { DisplayMd, SplitText } from "@/components";

const Header = styled(motion.hgroup)`
  width: 100%;
  margin: 0 auto;
  max-width: var(--breakpoint-desktop-small);

  padding-top: var(--measurement-large-70);
`;
const HeroDescWrapper = styled(motion.div)`
  max-width: var(--breakpoint-tablet-small);
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
const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

function LandingHeader() {
  const router = useRouter();

  return (
    <Header variants={stagger} initial="hidden" animate="visible">
      <HeroDescWrapper variants={slideEmphasis} className="m-b-large-30">
        <DisplayMd className="m-b-large-10">
          Headless Design System platform built for modern product teams to
          craft apps people love to use.
        </DisplayMd>

        <motion.div
          variants={stagger}
          className="flex flex-wrap align-center g-medium-10"
        >
          <motion.span variants={slideEmphasis}>
            <Button
              variant="mono"
              sizing="large"
              animation="reflective"
              onClick={() => router.push("/docs/getting-started")}
            >
              <SplitText
                stagger={0.02}
                duration={0.1}
                delay={0.5}
                variant="fade"
                text="Getting started"
              />
            </Button>
          </motion.span>
          <motion.span variants={slideEmphasis}>
            <Button
              variant="secondary"
              sizing="large"
              animation="reflective"
              onClick={() => router.push("/docs/introduction")}
            >
              <SplitText
                stagger={0.02}
                duration={0.1}
                delay={0.5}
                variant="fade"
                text="Documentation"
              />
            </Button>
          </motion.span>
        </motion.div>
      </HeroDescWrapper>

      <LandingHero />
    </Header>
  );
}

export default LandingHeader;
