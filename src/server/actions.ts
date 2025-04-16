"use server";

import { MUTATIONS } from "./db/mutations";
import { revalidatePath } from "next/cache";

import type { GenerateLibraryProperties } from "@/types";
import {
  updateLibrarySchema,
  type UpdateLibraryType,
} from "@/schemas/library-schema";

export async function InsertLibraryAction(payload: GenerateLibraryProperties) {
  const result = await MUTATIONS.InsertLibraryData(payload);

  if (result) revalidatePath("/");
  return result;
}

export async function DeleteLibrary(libraryId: number) {
  const result = await MUTATIONS.DeleteLibraryData(libraryId);

  if (result) revalidatePath("/");
  return result;
}

export async function UpdateLibrary(
  form: UpdateLibraryType,
  libraryId: number,
) {
  const { success } = updateLibrarySchema.safeParse(form);
  if (!success) throw new Error("Invalid form data");

  const result = await MUTATIONS.UpdateLibraryData(form, libraryId);
  if (!result) throw new Error("Failed to update library");

  revalidatePath(`/library/${libraryId}`);
  return result;
}
