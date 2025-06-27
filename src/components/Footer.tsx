"use client";

import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: var(--body-color);
  border-top: var(--measurement-small-30) solid var(--font-color-alpha-10);
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <FooterWrapper className="p-x-medium-60 p-y-large-10 flex justify-center align-center g-medium-10">
      <p className="fs-medium-10">
        <span className="opacity-default-60">Built by</span>&nbsp;
        <a target="_blank" href="https://github.com/nnsncl">
          nnsncl
        </a>
        <span className="opacity-default-60">&nbsp;at&nbsp;</span>
        <a target="_blank" href="https://github.com/foundation-ui">
          Foundation UI
        </a>
        .
        <span className="opacity-default-60">
          &nbsp;The source code is available on&nbsp;
        </span>
        <a
          target="_blank"
          href="https://github.com/foundation-ui/design-system"
        >
          Github
        </a>
        .
      </p>
    </FooterWrapper>
  );
}

export default Footer;
