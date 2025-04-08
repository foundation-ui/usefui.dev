"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";

import { generateTokensLibrary } from "@foundation-ui/core";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

const mockUserID = BigInt(198198190818190);
const mockLibraryId = BigInt(18717817178);
const mock: (typeof libraries.$inferSelect)[] = [
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

export async function InsertMock() {
  const result = await db.insert(libraries).values(mock);

  if (!result) throw new Error("Failed to create library");
  revalidatePath("/");
}

export async function DeleteMock() {
  const result = await db
    .delete(libraries)
    .where(eq(libraries.id, mockLibraryId));

  if (!result) throw new Error("Failed to delete library");
  revalidatePath("/");
}
