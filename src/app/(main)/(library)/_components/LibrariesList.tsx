"use client";

import React from "react";

import LibraryCard from "./LibraryCard";
import { MaxWidthContainer } from "@/components";
import type { LibraryProps } from "@/actions/types";
import { Button } from "@foundation-ui/components";
import { useMutation } from "@tanstack/react-query";
import { InsertMock } from "@/actions/InsertMock";

function LibrariesList({ libraries }: { libraries: LibraryProps[] }) {
  const { mutate } = useMutation({
    mutationFn: InsertMock,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (data) => {
      console.log(data);
    },
  });

  return (
    <MaxWidthContainer className="grid g-medium-30 p-medium-60">
      {libraries.length === 0 && (
        <Button onClick={() => mutate()}>Insert</Button>
      )}
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
