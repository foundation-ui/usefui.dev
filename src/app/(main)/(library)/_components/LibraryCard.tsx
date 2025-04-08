"use client";

import React from "react";
import styled from "styled-components";

import CardActions from "./CardActions";

import { TextMuted } from "@/components/shared/TextMuted";
import { Divider } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

const CardBody = styled.article`
  border: var(--measurement-small-30) solid var(--font-color-alpha-10);
  border-radius: var(--measurement-medium-30);

  box-shadow: var(--measurement-small-30) var(--measurement-small-30)
    var(--measurement-small-10) var(--alpha-mono-darkest-10);

  background: var(--body-color);
  background-image: linear-gradient(
    45deg,
    var(--body-color) 0%,
    var(--contrast-color) 100%
  );

  will-change: box-shadow;
  transition: ease-in-out 0.2s;

  &:hover {
    box-shadow: none;
  }
`;

function LibraryCard({
  id,
  title,
  published,
  description,
  updatedAt,
}: typeof librariesSchema.$inferSelect) {
  return (
    <CardBody className="">
      <hgroup className="p-b-medium-30 p-t-medium-60 p-x-medium-60 grid g-medium-10 ">
        <div className="flex align-center g-medium-10">
          <h6 className="fs-medium-10">{title}</h6>
          <Icon width={12} height={12} fillOpacity={0.3}>
            {published ? <Icon.Globe /> : <Icon.Key />}
          </Icon>
        </div>
        <p className="opacity-default-30 fs-medium-10">{description}</p>
      </hgroup>

      <Divider />
      <footer className="flex justify-between align-center p-b-medium-60 p-t-medium-30 p-x-medium-60 fs-medium-10">
        <div>
          <span>{id}</span>
          <TextMuted className=" opacity-default-10">|</TextMuted>
          <span className="opacity-default-60">{updatedAt}</span>&nbsp;
        </div>

        <CardActions libraryId={String(id)} />
      </footer>
    </CardBody>
  );
}

export default LibraryCard;
