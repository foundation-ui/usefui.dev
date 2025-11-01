"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

import { DisplayXxl } from "@/components";
import { Button } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";

export const CTAContainer = styled(motion.section)`
  background: var(--contrast-color);
  height: var(--breakpoint-mobile);
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.24 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: "var(--measurement-medium-10)" },
  show: { opacity: 1, y: 0 },
};
function LandingCallToAction() {
  const router = useRouter();

  return (
    <CTAContainer className="p-y-large-10 p-x-large-10 ">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={container}
        className="flex flex-column g-medium-60 align-center justify-center w-100 h-100"
      >
        <motion.span variants={staggerItem}>
          <DisplayXxl>Try Foundation Ui</DisplayXxl>
        </motion.span>
        <motion.span variants={staggerItem}>
          <Button
            variant="primary"
            sizing="large"
            onMouseDown={() => router.push("/docs/getting-started")}
          >
            Get started now
            <Icon>
              <PixelIcon.ArrowRight />
            </Icon>
          </Button>
        </motion.span>
      </motion.div>
    </CTAContainer>
  );
}

export default LandingCallToAction;
