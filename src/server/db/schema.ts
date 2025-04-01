import {
  bigint,
  text,
  boolean,
  singlestoreTableCreator,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `fui_engine_${name}`,
);

export const libraries = createTable("libraries_table", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  creatorId: bigint("creatorId", { mode: "bigint" }),

  title: text("title"),
  description: text("description"),

  published: boolean("published"),
  library: text("library"),

  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});
