import React from "react";
// import LibraryData from "./_components/LibraryData";
import { QUERIES } from "@/server/db/queries";

async function LibraryDetails(props: { params: Promise<{ id: string }> }) {
  /**
   * In order to make this page experience dynamic for each library,
   * props.params needs to be awaited, NextJS will use this information
   * to not use server-static cached assets.
   * Source: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
   */
  const params = await props.params;

  /**
   * Make sure the param is valid to provide a more detailed
   * status to users. This could be enhanced in the future, for now i'll leave it as is.
   */
  const parsedLibraryId = parseInt(params?.id);
  if (isNaN(parsedLibraryId)) {
    return (
      <section className="w-100 h-100 p-large-10">
        <p className="fs-medium-10 opacity-default-30 m-b-medium-60">
          Invalid Library ID
        </p>
      </section>
    );
  }

  const details = await QUERIES.GetMockDetails(parsedLibraryId);

  if (!details) {
    return (
      <section className="w-100 h-100 p-large-10">
        <p className="fs-medium-10 opacity-default-30 m-b-medium-60">
          Unable to fetch details
        </p>
      </section>
    );
  }

  return (
    <section className="w-100 h-100 p-large-10">
      {/* <LibraryData /> */}
      <hgroup>
        <p className="fs-medium-10 opacity-default-30 m-b-medium-60">
          {details.title}
        </p>

        {JSON.stringify(details.library, null, 4)}
      </hgroup>
    </section>
  );
}

export default LibraryDetails;
