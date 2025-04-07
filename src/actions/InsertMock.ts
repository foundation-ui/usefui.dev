"use server";

import { db } from "@/server/db";
import { libraries } from "@/server/db/schema";
import { revalidatePath } from "next/cache";

/** Mocks */
import { generateTokensLibrary } from "@foundation-ui/core";
const mock: (typeof libraries.$inferSelect)[] = [
  {
    id: BigInt(917356209873),
    creatorId: BigInt(108563478615),

    title: "Acme Test/Insert",
    description: "Design Tokens Library used for Acme Web and Desktop Apps",

    published: true,
    library: JSON.stringify(
      generateTokensLibrary("fui-apps", [
        {
          type: "color",
          values: [
            {
              name: "dark",
              base: "353531",
              variations: {
                alpha: true,
                shade: false,
                tint: false,
              },
            },

            {
              name: "light",
              base: "EBEBEB",
              variations: {
                alpha: true,
                shade: false,
                tint: false,
              },
            },
            {
              name: "red",
              base: "EC4E20",
              variations: {
                alpha: true,
                shade: true,
                tint: true,
              },
            },
            {
              name: "orange",
              base: "FF7F11",
              variations: {
                alpha: true,
                shade: true,
                tint: true,
              },
            },
            {
              name: "green",
              base: "69DC9E",
              variations: {
                alpha: true,
                shade: true,
                tint: true,
              },
            },
          ],
        },
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
