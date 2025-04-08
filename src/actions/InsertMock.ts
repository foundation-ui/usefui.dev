"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

const mockUserID = BigInt(198198190818190);

/** Mocks */
import { generateTokensLibrary } from "@foundation-ui/core";
const mock: (typeof libraries.$inferSelect)[] = [
  {
    id: BigInt(18717817178),
    creatorId: mockUserID,

    title: "Acme Test/Secondary",
    description: "Design Tokens Library used for Acme Web and Desktop Apps",

    published: true,
    library: JSON.stringify(
      generateTokensLibrary("fui-apps", [
        // {
        //   type: "color",
        //   values: [
        //     {
        //       name: "dark",
        //       base: "353531",
        //       variations: {
        //         alpha: true,
        //         shade: false,
        //         tint: false,
        //       },
        //     },
        //   ],
        // },
      ]),
    ),

    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  },
];

export async function InsertMock() {
  const result = await db.insert(libraries).values(mock);

  if (!result) throw new Error("Failed to create library");
  revalidatePath("/");
}
