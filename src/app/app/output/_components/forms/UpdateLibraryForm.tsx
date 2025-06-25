"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

import { Button, Field, Sheet } from "@foundation-ui/components";

import { updateLibrarySchema } from "@/schemas/library-schema";
import { UpdateLibraryAction } from "@/server/actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import type { UpdateLibraryType } from "@/schemas/library-schema";
import type { libraries_table as librariesSchema } from "@/server/db/schema";

function UpdateLibraryForm({
  data,
}: {
  data: typeof librariesSchema.$inferSelect;
}) {
  const form = useForm<UpdateLibraryType>({
    resolver: zodResolver(updateLibrarySchema),
    defaultValues: {
      name: data.name ?? "",
      description: data.description ?? "",
    },
  });

  const { userId, isSignedIn } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: () => handleUpdateLibrary(),
    onSuccess: () => {
      toast.success("Library updated", { id: "update-library" });
    },
    onError: () => {
      toast.error("Failed to update library", { id: "update-library" });
    },
  });

  const handleUpdateLibrary = React.useCallback(async () => {
    if (!isSignedIn || !userId) {
      throw new Error(`[Unauthorized] - Sign In to Update libraries`);
    }

    return await UpdateLibraryAction(
      {
        name: form.getValues("name"),
        description: form.getValues("description"),
      },
      Number(data.id),
    );
  }, [data.id, form, isSignedIn, userId]);

  return (
    <React.Fragment>
      <form className="grid g-medium-30 m-b-large-10">
        <Field.Root>
          <Field.Wrapper className="grid fs-medium-10">
            <Field.Label htmlFor="name" optional>
              Name
            </Field.Label>
            <Field
              id="name"
              variant="secondary"
              sizing="medium"
              disabled={isPending}
              {...form.register("name")}
              style={{ width: "auto" }}
              onChange={(event) => form.setValue("name", event.target.value)}
            />
          </Field.Wrapper>
        </Field.Root>
        <Field.Root>
          <Field.Wrapper className="grid fs-medium-10">
            <Field.Label htmlFor="description" optional>
              Description
            </Field.Label>
            <Field
              id="description"
              variant="secondary"
              sizing="medium"
              disabled={isPending}
              {...form.register("description")}
              style={{ width: "auto" }}
              onChange={(event) =>
                form.setValue("description", event.target.value)
              }
            />
          </Field.Wrapper>
        </Field.Root>
      </form>
      <section className="flex justify-end align-center g-medium-10">
        <Sheet.Trigger variant="border" sizing="medium">
          Cancel
        </Sheet.Trigger>
        <Button
          variant="primary"
          sizing="medium"
          disabled={isPending}
          onClick={() => {
            toast.loading("Updating library..", { id: "update-library" });
            mutate();
          }}
        >
          Save changes
        </Button>
      </section>
    </React.Fragment>
  );
}

export default UpdateLibraryForm;
