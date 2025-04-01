"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

import type { LibraryProps } from "./types";

const mock: LibraryProps[] = [
  {
    id: BigInt(917356209873),
    creatorId: BigInt(108563478615),

    title: "Acme Test/Insert",
    description: "Design Tokens Library used for Acme Web and Desktop Apps",

    published: true,
    library: JSON.stringify([]),

    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export async function InsertMock() {
  const result = await db.insert(libraries).values(mock);

  if (!result) throw new Error("Failed to create library");
  revalidatePath("/");
}
