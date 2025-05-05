"use server";

import { MUTATIONS } from "./db/mutations";
import { revalidatePath } from "next/cache";

import type { GenerateLibraryProperties } from "@/types";
import {
  updateLibrarySchema,
  type UpdateLibraryType,
} from "@/schemas/library-schema";

export async function InsertLibraryAction(payload: GenerateLibraryProperties) {
  const { success } = updateLibrarySchema.safeParse(payload);
  if (!success) throw new Error("Invalid library name");

  const result = await MUTATIONS.InsertLibraryData(payload);
  if (result) revalidatePath("/workspace");

  return result;
}

export async function UpdateLibraryAction(
  form: UpdateLibraryType,
  libraryId: number,
) {
  const { success } = updateLibrarySchema.safeParse(form);
  if (!success) throw new Error("Invalid form data");

  const result = await MUTATIONS.UpdateLibraryData(form, libraryId);
  if (!result) throw new Error("Failed to update library");

  revalidatePath(`/workspace/library/${libraryId}`);

  return result;
}

export async function DeleteLibraryAction(libraryId: number, userId: string) {
  if (!userId) throw new Error("Unauthorized");

  const result = await MUTATIONS.DeleteLibraryData(libraryId);
  if (!result) throw new Error("Failed to delete library");

  revalidatePath("/workspace");
  return result;
}
