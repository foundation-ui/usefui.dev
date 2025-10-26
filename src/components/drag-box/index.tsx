import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Page } from "@usefui/components";
import { SplitText } from "@/components";

const BoxContainer = styled.div`
  width: 100%;
  height: var(--breakpoint-tablet-small);
  border-radius: var(--measurement-medium-30);
  background-color: var(--contrast-color);

  position: relative;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  resize: both;
  outline: none;
  overflow: auto;
  z-index: 10;
  box-sizing: border-box;

  min-width: var(--breakpoint-mobile);
  max-width: var(--breakpoint-tablet);
  width: 100%;

  min-height: var(--breakpoint-mobile);
  max-height: var(--breakpoint-tablet-small);
  height: 100%;

  background-color: var(--body-color);
  border-radius: var(--measurement-medium-30);
  box-shadow: 0 var(--measurement-medium-30) var(--measurement-medium-30)
    calc(var(--measurement-medium-10) * -1) var(--alpha-mono-darkest-10);
`;
const BoxHeader = styled(Page.Navigation)`
  background: none !important;
`;
const BrowserActionPill = styled.span`
  width: var(--measurement-medium-40);
  height: var(--measurement-medium-40);
  border-radius: var(--measurement-large-90);
  background: var(--font-color-alpha-10);
`;

interface DragboxHeaderProps
  extends React.ComponentProps<typeof Page.Navigation> {
  header: string;
  meta: string;
}

export interface IDragboxComposition {
  Container: typeof DragboxContainer;
  Header: typeof DragboxHeader;
}

const DragboxContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, forwardedRef): React.ReactElement => {
  const { children, ...restProps } = props;
  return (
    <BoxContainer
      ref={forwardedRef}
      className="flex flex-column justify-center align-center p-large-10"
      {...restProps}
    >
      {children}
    </BoxContainer>
  );
});
DragboxContainer.displayName = "Dragbox.Container";

const DragboxHeader = (props: DragboxHeaderProps) => {
  const { header, meta } = props;
  return (
    <BoxHeader className="flex align-center justify-between g-medium-60">
      <div className="flex align-center g-medium-10">
        {Array.from({ length: 3 }).map((v, k) => (
          <BrowserActionPill key={`${String(v)}_${k}`} />
        ))}
      </div>
      <kbd className="w-100 fs-small-50 opacity-default-30">
        <SplitText stagger={0.02} duration={0.1} variant="fade" text={header} />
      </kbd>
      <kbd className="fs-small-50 opacity-default-30">{meta}</kbd>
    </BoxHeader>
  );
};
DragboxHeader.displayName = "Dragbox.Header";

const Dragbox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      drag
      dragMomentum={false}
      dragElastic={0.2}
      whileTap={{ cursor: "grabbing" }}
    >
      {children}
    </Box>
  );
};
Dragbox.displayName = "Dragbox";

Dragbox.Container = DragboxContainer;
Dragbox.Header = DragboxHeader;

export { Dragbox, DragboxContainer, DragboxHeader };
