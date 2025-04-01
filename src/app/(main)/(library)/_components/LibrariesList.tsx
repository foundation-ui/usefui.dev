"use client";

import React from "react";

import LibraryCard from "./LibraryCard";
import { MaxWidthContainer } from "@/components";

import type { LibraryProps } from "../page";

function LibrariesList({ libraries }: { libraries: LibraryProps[] }) {
  return (
    <MaxWidthContainer className="grid g-medium-30 p-medium-60">
      {libraries.map((item: LibraryProps, key: number) => (
        <LibraryCard
          key={key}
          id={item.id}
          name={item.name}
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
