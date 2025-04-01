"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";

import LibraryCard from "./LibraryCard";

// import { Editor } from "@/features";
import { EmptySection, MaxWidthContainer, Spinner } from "@/components";
import { Button } from "@foundation-ui/components";
import { Icon } from "@foundation-ui/icons";

import { InsertMock } from "@/actions/InsertMock";
import type { LibraryProps } from "@/actions/types";

function LibrariesList({ libraries }: { libraries: LibraryProps[] }) {
  const { mutate, isPending } = useMutation({
    mutationFn: InsertMock,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  if (libraries.length === 0) {
    return (
      <MaxWidthContainer className="grid g-medium-30 h-100 align-center justify-center">
        <EmptySection
          title="No Library Available"
          description="Open the editor to generate a new library."
          icon={
            <Icon className="m-y-small-60" fillOpacity={0.3}>
              <Icon.Warning />
            </Icon>
          }
          action={
            <Button
              onClick={() => mutate()}
              sizing="medium"
              variant="border"
              disabled={isPending}
            >
              <span className="flex align-center justify-center p-y-small-30">
                Insert Mock
              </span>
              {isPending ? (
                <Spinner />
              ) : (
                <Icon>
                  <Icon.NewWindow />
                </Icon>
              )}
            </Button>

            // <Dialog.Root>
            //   <Dialog.Trigger sizing="medium" variant="border">
            //     <span className="flex align-center justify-center p-y-small-30">
            //       Open Editor
            //     </span>
            //   </Dialog.Trigger>

            //   <Editor />
            // </Dialog.Root>
          }
        />
      </MaxWidthContainer>
    );
  }

  return (
    <MaxWidthContainer className="grid g-medium-30 p-medium-60">
      {libraries.map((item: LibraryProps, key: number) => (
        <LibraryCard
          key={key}
          id={item.id}
          creatorId={item.creatorId}
          title={item.title}
          description={item.description}
          published={item.published}
          library={item.library}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
        />
      ))}
    </MaxWidthContainer>
  );
}

export default LibrariesList;
