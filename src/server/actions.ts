"use server";

import { MUTATIONS } from "./db/mutations";
import { revalidatePath } from "next/cache";

export async function InsertMock() {
  const result = await MUTATIONS.InsertMockData();
  if (result) revalidatePath("/");
}

export async function DeleteMock() {
  const result = await MUTATIONS.DeleteMockData();
  if (result) revalidatePath("/");
}
