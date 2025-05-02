"use client";

import React from "react";

import LibraryHero from "./LibraryHero";
import LibraryCard from "./LibraryCard";

import { Editor } from "@/features";
import { EmptySection, GridLayoutSmall, MaxWidthContainer } from "@/components";
import { Dialog, Divider } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import type { libraries_table as librariesSchema } from "@/server/db/schema";

function LibrariesList({
  libraries,
}: {
  libraries: (typeof librariesSchema.$inferSelect)[];
}) {
  if (libraries.length === 0) {
    return (
      <MaxWidthContainer className="grid g-medium-30 h-100 align-center justify-center">
        <EmptySection
          title="No Library Available"
          description="Open the editor to generate a new library."
          icon={
            <Icon width={24} height={24}>
              <PixelIcon.Downasaur />
            </Icon>
          }
          action={
            <Dialog.Root>
              <Dialog.Trigger sizing="medium" variant="border">
                <span className="flex align-center justify-center p-y-small-30">
                  Open Editor
                </span>
              </Dialog.Trigger>

              <Editor />
            </Dialog.Root>
          }
        />
      </MaxWidthContainer>
    );
  }

  return (
    <section className="w-100 h-100 p-medium-60">
      <MaxWidthContainer className="w-100 p-b-medium-60">
        <LibraryHero />

        <Divider className="m-y-large-10" />
        <GridLayoutSmall>
          {libraries.map(
            (item: typeof librariesSchema.$inferSelect, key: number) => (
              <LibraryCard
                key={key}
                id={item.id}
                creatorId={item.creatorId}
                name={item.name}
                description={item.description}
                library={item.library}
                createdAt={item.createdAt}
                updatedAt={item.updatedAt}
              />
            ),
          )}
        </GridLayoutSmall>
      </MaxWidthContainer>
    </section>
  );
}

export default LibrariesList;
