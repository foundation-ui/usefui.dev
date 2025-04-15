import "server-only";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";

import { libraries_table as librariesSchema } from "@/server/db/schema";
import type { GenerateLibraryProperties } from "@/types";

export const MUTATIONS = {
  InsertLibraryData: async function (payload: GenerateLibraryProperties) {
    const result = await db.insert(librariesSchema).values(payload);
    if (!result) throw new Error("Failed to create library");

    return true;
  },

  UpdateLibraryData: async function (
    data: { name: string; title: string; description?: string | undefined },
    libraryId: number,
  ) {
    const result = await db
      .update(librariesSchema)
      .set({ ...data })
      .where(eq(librariesSchema.id, BigInt(libraryId)));

    if (!result) throw new Error("Failed to update library");
    return true;
  },

  DeleteMockData: async function (libraryId: number) {
    const result = await db
      .delete(librariesSchema)
      .where(eq(librariesSchema.id, BigInt(libraryId)));

    if (!result) throw new Error("Failed to delete library");
    return true;
  },
};
