import "server-only";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";

import { libraries_table as librariesSchema } from "@/server/db/schema";

const mockUserID = BigInt(198198190818190);

export const QUERIES = {
  GetLibraries: async function () {
    const result = await db
      .select()
      .from(librariesSchema)
      .where(eq(librariesSchema.creatorId, mockUserID))
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
    return result.at(0) as typeof librariesSchema.$inferSelect;
  },
};
