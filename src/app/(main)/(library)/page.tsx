"use client";

import React from "react";

import LibraryCard from "./_components/LibraryCard";
import { MaxWidthContainer } from "@/components";

const mockItems = [
  {
    restricted: false,
    title: "Acme Web/Desktop",
    description: "Design Tokens Library used for Acme Web and Desktop Apps",
    lastUpdateAt: "Updated 2 days ago",
    lastUpdateId: "~q2a9Zh5nsLk...",
    id: "q2a9Zh5nsLk",
  },
  {
    restricted: true,
    title: "Acme Mobile",
    description: "Design Tokens Library used for Acme Mobile Apps",
    lastUpdateAt: "Updated yesterday",
    lastUpdateId: "~r7b3Xv1mdPi...",
    id: "r7b3Xv1mdPi",
  },
  {
    restricted: false,
    title: "Acme Brand",
    description: "Design Tokens Library used for Acme Brand Assets",
    lastUpdateAt: "Updated 1 week ago",
    lastUpdateId: "~p1c8Ws6jtUy...",
    id: "p1c8Ws6jtUy",
  },
  {
    restricted: true,
    title: "Acme Legacy",
    description: "Design Tokens Library used for Acme Legacy Systems",
    lastUpdateAt: "Updated 1 month ago",
    lastUpdateId: "~o4a2Rf9klNj...",
    id: "o4a2Rf9klNj",
  },
  {
    restricted: false,
    title: "Acme Internal",
    description: "Design Tokens Library used for Acme Internal Tools",
    lastUpdateAt: "Updated 3 days ago",
    lastUpdateId: "~n9z5Hg2frDa...",
    id: "n9z5Hg2frDa",
  },
];

function LibraryPage() {
  return (
    <section className="w-100 h-100">
      <MaxWidthContainer className="grid g-medium-30 p-medium-60">
        {mockItems.map((item, key) => (
          <LibraryCard
            key={key}
            restricted={item.restricted}
            title={item.title}
            description={item.description}
            lastUpdateAt={item.lastUpdateAt}
            lastUpdateId={item.lastUpdateId}
            libraryId={item.id}
          />
        ))}
      </MaxWidthContainer>
    </section>
  );
}

export default LibraryPage;
