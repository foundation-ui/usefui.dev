"use client";

import React from "react";
import styled from "styled-components";

import Link from "next/link";

import { CardBody } from "./LandingProducts";
import {
  MaxWidthContainer,
  GridLayout,
  DisplayMd,
  DisplaySmall,
} from "@/components";
import { Icon, PixelIcon, SocialIcon } from "@usefui/icons";

const SocialsWrapper = styled(MaxWidthContainer)`
  width: 100%;

  hgroup {
    text-align: center;

    max-width: var(--breakpoint-mobile);
  }
`;

function LandingSocials() {
  return (
    <div className="p-y-large-30 p-x-medium-60">
      <SocialsWrapper className="flex align-center justify-center m-b-large-10">
        <hgroup>
          <DisplayMd className="m-b-medium-30">Stay in the loop</DisplayMd>
          <DisplaySmall className=" opacity-default-60">
            Join the community and learn how other people get the most out of
            Foundation UI.
          </DisplaySmall>
        </hgroup>
      </SocialsWrapper>

      <GridLayout>
        <CardBody
          className="grid align-end w-100 p-large-10"
          as={Link}
          data-mode="link"
          href="https://github.com/foundation-ui/design-system"
          target="_blank"
        >
          <header className="flex align-center justify-between m-b-large-60">
            <Icon>
              <PixelIcon.ArrowRight />
            </Icon>
          </header>
          <hgroup>
            <div className="m-b-medium-60">
              <Icon viewBox="0 0 14 14" width={24} height={24}>
                <SocialIcon.Github />
              </Icon>
            </div>

            <DisplaySmall className="m-b-medium-30">Github</DisplaySmall>
            <p className="fs-medium-20 opacity-default-60">
              Star this project on Github.
            </p>
          </hgroup>
        </CardBody>
        <CardBody
          className="grid align-end w-100 p-large-10"
          as={Link}
          data-mode="link"
          href="https://discord.gg/yer3CgTTwD"
          target="_blank"
        >
          <header className="flex align-center justify-between m-b-large-60">
            <Icon>
              <PixelIcon.ArrowRight />
            </Icon>
          </header>
          <hgroup>
            <div className="m-b-medium-60">
              <Icon width={24} height={24} viewBox="0 -28.5 256 256">
                <SocialIcon.Discord />
              </Icon>
            </div>

            <DisplaySmall className="m-b-medium-30">Discord</DisplaySmall>
            <p className="fs-medium-20 opacity-default-60">
              Get the inside track on new features.
            </p>
          </hgroup>
        </CardBody>
      </GridLayout>
    </div>
  );
}

export default LandingSocials;
