import React from "react";
import LibrariesList from "./_components/LibrariesList";

export type LibraryProps = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly published: boolean;
  readonly library: string;
  readonly createdAt: string;
  readonly updatedAt: string;
};

async function LibraryPage() {
  const libraries = await new Promise((res) =>
    res([
      {
        published: true,
        id: "~q2a9Zh5nsLk",
        name: "Acme Web/Desktop",
        description: "Design Tokens Library used for Acme Web and Desktop Apps",
        library: JSON.stringify([]),
        createdAt: "Created 2 days ago",
        updatedAt: "Created 4 hours ago",
      },
      {
        published: false,
        id: "~b8zXy3pRtNj",
        name: "Acme Mobile",
        description: "Design Tokens Library specifically for Acme Mobile Apps",
        library: JSON.stringify([]),
        createdAt: "Created 1 week ago",
        updatedAt: "Created 1 day ago",
      },
      {
        published: true,
        id: "~w1vUs6gDjCl",
        name: "Acme Brand",
        description: "Core Design Tokens Library for all Acme Products",
        library: JSON.stringify([]),
        createdAt: "Created 1 month ago",
        updatedAt: "Created 2 weeks ago",
      },
    ]),
  );

  if (!libraries)
    return (
      <hgroup className="flex align-center g-medium-30">
        <h6>Fetch Error</h6>
      </hgroup>
    );

  return (
    <section className="w-100 h-100">
      <LibrariesList libraries={libraries as LibraryProps[]} />
    </section>
  );
}

export default LibraryPage;
