import "server-only";

import {
  bigint,
  text,
  boolean,
  singlestoreTableCreator,
} from "drizzle-orm/singlestore-core";

import { env } from "@/env";

export const createTable = singlestoreTableCreator(
  (name) => `${env.SINGLESTORE_TABLES_PREFIX}_${name}`,
);

export const libraries_table = createTable("libraries_table", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  creatorId: bigint("creatorId", { mode: "bigint" }),

  title: text("title"),
  description: text("description"),

  published: boolean("published"),
  library: text("library"),

  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});
