"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export async function GetMockDetails(libraryId: number) {
  const result = await db
    .selectDistinct()
    .from(libraries)
    .where(eq(libraries.id, BigInt(libraryId)));

  if (!result) throw new Error("Failed to fetch libraries");
  return result.at(0) as typeof libraries.$inferSelect;
}
