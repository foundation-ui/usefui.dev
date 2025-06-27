import "server-only";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";

import { libraries_table as librariesSchema } from "@/server/db/schema";

export const QUERIES = {
  GetLibraries: async function (userId: string) {
    const result = await db
      .select()
      .from(librariesSchema)
      .orderBy(librariesSchema.createdAt);

    if (!result) throw new Error("Failed to fetch libraries");
    return result as (typeof librariesSchema.$inferSelect)[];
  },

  GetLibraryDetails: async function (libraryId: number) {
    const result = await db
      .selectDistinct()
      .from(librariesSchema)
      .where(eq(librariesSchema.id, BigInt(libraryId)));
    if (!result) throw new Error("Failed to fetch libraries");

    const libraryDetails = result.at(0);
    return libraryDetails as typeof librariesSchema.$inferSelect;
  },
};
