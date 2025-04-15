import { z } from "zod";

export type UpdateLibraryType = z.infer<typeof updateLibrarySchema>;
export const updateLibrarySchema = z.object({
  name: z.string().max(50),
  title: z.string().max(150),
  description: z.string().max(255).optional(),
});
