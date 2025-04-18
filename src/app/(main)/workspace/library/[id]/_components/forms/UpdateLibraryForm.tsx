"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { Button, Field, Sheet } from "@foundation-ui/components";

import { updateLibrarySchema } from "@/schemas/library-schema";
import { UpdateLibrary } from "@/server/actions";

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
      title: data.title ?? "",
      description: data.description ?? "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      UpdateLibrary(
        {
          name: form.getValues("name"),
          title: form.getValues("title"),
          description: form.getValues("description"),
        },
        Number(data.id),
      ),
    onSuccess: () => {
      toast.success("Library updated", { id: "update-library" });
    },
    onError: () => {
      toast.error("Failed to update library", { id: "update-library" });
    },
  });

  return (
    <React.Fragment>
      <form className="grid g-medium-30 m-b-medium-60">
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
            <Field.Label htmlFor="title" optional>
              Title
            </Field.Label>
            <Field
              id="title"
              variant="secondary"
              sizing="medium"
              disabled={isPending}
              {...form.register("title")}
              style={{ width: "auto" }}
              onChange={(event) => form.setValue("title", event.target.value)}
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
      <section className="flex justify-end align-center g-medium-60">
        <Sheet.Trigger variant="ghost" sizing="small">
          <span className="fs-medium-10">Cancel</span>
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
