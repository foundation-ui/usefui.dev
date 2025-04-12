import "server-only";

import { db } from "@/server/db";
import { eq } from "drizzle-orm";

import { libraries_table as librariesSchema } from "@/server/db/schema";
import { generateTokensLibrary } from "@foundation-ui/core";

const mockUserID = BigInt(198198190818190);
const mockLibraryId = BigInt(18717817178);
const mock: (typeof librariesSchema.$inferSelect)[] = [
  {
    id: mockLibraryId,
    creatorId: mockUserID,
    title: "Acme Test/Secondary",
    description: "Design Tokens Library used for Acme Web and Desktop Apps",
    published: true,
    library: JSON.stringify(generateTokensLibrary("fui-apps", [])),
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export const MUTATIONS = {
  InsertLibraryData: async function (
    payload: typeof librariesSchema.$inferSelect,
  ) {
    const result = await db.insert(librariesSchema).values(payload);
    if (!result) throw new Error("Failed to create library");

    return true;
  },
  InsertMockData: async function () {
    const result = await db.insert(librariesSchema).values(mock);

    if (!result) throw new Error("Failed to create library");
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
