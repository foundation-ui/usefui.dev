"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Page } from "@foundation-ui/components";
import { Icon, AppLink } from "~/components";

const Hgroup = styled.hgroup`
  text-align: center;
`;

function NotFoundPage() {
  return (
    <Page>
      <Page.Content>
        <section className="grid h-100 justify-center align-center">
          <section>
            <Hgroup className="grid g-medium-30">
              <h1>Page Not Found</h1>
              <small className="opacity-default-30">
                If you believe this is an error, please contact our support
                team.
              </small>
              <AppLink
                as={Link}
                href="/"
                className="fs-medium-20 p-medium-60 flex align-center justify-center g-medium-30"
              >
                <Icon>
                  <Icon.NewWindow />
                </Icon>
                Back to overview
              </AppLink>
            </Hgroup>
          </section>
        </section>
      </Page.Content>
    </Page>
  );
}

export default NotFoundPage;
