"use client";

import React from "react";
import styled from "styled-components";
import { motion, type Variants } from "framer-motion";

import { GrainGradient } from "@paper-design/shaders-react";
import { Dragbox, Terminal } from "@/components";

const ShaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

function LandingHero() {
  const constraintsRef = React.useRef<HTMLDivElement>(null);

  return (
    <motion.div variants={fade} initial="hidden" animate="visible">
      <Dragbox.Container ref={constraintsRef}>
        <Dragbox>
          <div className="h-100 flex flex-column justify-between">
            <Dragbox.Header header="@usefui" meta="v.1" />
            <Terminal />
          </div>
        </Dragbox>

        <ShaderContainer>
          <GrainGradient
            width={1280}
            height={720}
            colors={["#ebeae5", "#ffd233", "#FF7F11", "#EC4E20"]}
            colorBack="rgba(0,0,0,0)"
            softness={1}
            intensity={1}
            noise={0}
            shape="corners"
            speed={Math.PI / 2}
            scale={Math.PI}
            rotation={90}
          />
        </ShaderContainer>
      </Dragbox.Container>
    </motion.div>
  );
}

export default LandingHero;
