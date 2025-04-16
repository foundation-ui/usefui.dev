import React from "react";
import LibrariesList from "./_components/data/LibrariesList";

import { QUERIES } from "@/server/db/queries";

async function LibraryPage() {
  const libraries = await QUERIES.GetLibraries();

  if (!libraries)
    return (
      <hgroup className="flex align-center g-medium-30">
        <h6>Fetch Error</h6>
      </hgroup>
    );

  return (
    <section className="w-100 h-100">
      <LibrariesList libraries={libraries} />
    </section>
  );
}

export default LibraryPage;
