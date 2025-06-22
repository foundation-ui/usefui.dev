import React from "react";
import LibrariesDetails from "./_components/data/LibrariesDetails";

import { auth } from "@clerk/nextjs/server";
import { QUERIES } from "@/server/db/queries";

async function WorkspacePage() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  const libraries = await QUERIES.GetLibraries(userId);
  if (!libraries)
    return (
      <hgroup className="flex align-center g-medium-30">
        <h6>Fetch Error</h6>
      </hgroup>
    );

  return <LibrariesDetails libraries={libraries} />;
}

export default WorkspacePage;
