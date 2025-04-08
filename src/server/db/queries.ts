import "server-only";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";
import { eq } from "drizzle-orm";

const mockUserID = BigInt(198198190818190);
export async function GetMock() {
  const result = await db
    .select()
    .from(libraries)
    .where(eq(libraries.creatorId, mockUserID));

  if (!result) throw new Error("Failed to fetch libraries");
  return result as (typeof libraries.$inferSelect)[];
}
export async function GetMockDetails(libraryId: number) {
  const result = await db
    .selectDistinct()
    .from(libraries)
    .where(eq(libraries.id, BigInt(libraryId)));

  if (!result) throw new Error("Failed to fetch libraries");
  return result.at(0) as typeof libraries.$inferSelect;
}
