"use server";

import { MUTATIONS } from "./db/mutations";
import { revalidatePath } from "next/cache";

import type { GenerateLibraryProperties } from "@/types";
// import type { libraries_table as librariesSchema } from "@/server/db/schema";

export async function InsertLibraryAction(payload: GenerateLibraryProperties) {
  const result = await MUTATIONS.InsertLibraryData(payload);
  if (result) revalidatePath("/");
}

export async function DeleteMock(libraryId: number) {
  const result = await MUTATIONS.DeleteMockData(libraryId);
  if (result) revalidatePath("/");
}

export async function RevalidateLibraryPath() {
  revalidatePath("/");
}
