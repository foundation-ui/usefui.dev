import React from "react";
import LibraryData from "./_components/LibraryData";

async function LibraryDetails(props: { params: Promise<{ id: number }> }) {
  /**
   * In order to make this page experience dynamic for each library,
   * props.params needs to be awaited, NextJS will use this information
   * to not use server-static cached assets.
   * Source: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
   */
  const params = await props.params;
  console.log(params?.id);

  return (
    <section className="w-100 h-100 p-large-10">
      <LibraryData />
    </section>
  );
}

export default LibraryDetails;
