import "server-only";

import {
  bigint,
  text,
  boolean,
  index,
  singlestoreTableCreator,
} from "drizzle-orm/singlestore-core";

import { env } from "@/env";

export const createTable = singlestoreTableCreator(
  (name) => `${env.SINGLESTORE_TABLES_PREFIX}_${name}`,
);

export const libraries = createTable(
  "libraries_table",
  {
    id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
    creatorId: bigint("creatorId", { mode: "bigint" }),

    title: text("title"),
    description: text("description"),

    published: boolean("published"),
    library: text("library"),

    createdAt: text("createdAt"),
    updatedAt: text("updatedAt"),
  },
  (t) => {
    return [index("id_index").on(t.id)];
  },
);
