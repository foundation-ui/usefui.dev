"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import {
  Badge,
  Button,
  Divider,
  Field,
  Sheet,
  Tooltip,
} from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { format, formatDistanceToNow } from "date-fns";

import { updateLibrarySchema } from "@/schemas/library-schema";
import { zodResolver } from "@hookform/resolvers/zod";

import type { UpdateLibraryType } from "@/schemas/library-schema";
import type { libraries_table as librariesSchema } from "@/server/db/schema";
import { UpdateLibrary } from "@/server/actions";

import { toast } from "sonner";

function LibraryDetailsSheet({
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

  const handleCancel = React.useCallback(() => {
    form.reset();
    form.setValue("name", "");
    form.setValue("title", "");
    form.setValue("description", "");
  }, [form]);

  return (
    <Sheet.Root>
      <Tooltip content="Details">
        <Sheet.Trigger variant="ghost">
          <Icon>
            <PixelIcon.LayoutSidebarRight />
          </Icon>
        </Sheet.Trigger>
      </Tooltip>

      <Sheet side="right" sizing="medium">
        <hgroup className="flex justify-between align-center g-medium-10 m-b-medium-60">
          <h3 className="fs-medium-40">{data.name} details</h3>
          <Sheet.Trigger onClick={handleCancel}>
            <Icon>
              <PixelIcon.Close />
            </Icon>
          </Sheet.Trigger>
        </hgroup>
        <Divider className="m-y-medium-60" />
        <section className="grid g-medium-10">
          <Badge variant="border">
            <b>Created At:</b>&nbsp;
            {format(Number(data.createdAt), "dd/MM/yyyy")}
          </Badge>
          <Badge variant="border">
            <b>Last update:</b>&nbsp;
            {formatDistanceToNow(new Date(Number(data.updatedAt)), {
              addSuffix: true,
              includeSeconds: true,
            })}
          </Badge>
        </section>
        <Divider className="m-y-medium-60" />
        <form className="grid">
          <Field.Root>
            <Field.Wrapper className="flex align-center fs-medium-10">
              <Field.Label htmlFor="name" optional>
                Name:
              </Field.Label>
              <Field
                id="name"
                variant="ghost"
                sizing="small"
                disabled={isPending}
                {...form.register("name")}
                style={{ width: "auto", fontSize: "var(--fontsize-medium-10)" }}
                onChange={(event) => form.setValue("name", event.target.value)}
              />
            </Field.Wrapper>
          </Field.Root>
          <Field.Root>
            <Field.Wrapper className="flex align-center fs-medium-10">
              <Field.Label htmlFor="title" optional>
                Title:
              </Field.Label>
              <Field
                id="title"
                variant="ghost"
                sizing="small"
                disabled={isPending}
                {...form.register("title")}
                style={{ width: "auto", fontSize: "var(--fontsize-medium-10)" }}
                onChange={(event) => form.setValue("title", event.target.value)}
              />
            </Field.Wrapper>
          </Field.Root>
          <Field.Root>
            <Field.Wrapper className="flex align-center fs-medium-10">
              <Field.Label htmlFor="description" optional>
                Description:
              </Field.Label>
              <Field
                id="description"
                variant="ghost"
                sizing="small"
                disabled={isPending}
                {...form.register("description")}
                style={{ width: "auto", fontSize: "var(--fontsize-medium-10)" }}
                onChange={(event) =>
                  form.setValue("description", event.target.value)
                }
              />
            </Field.Wrapper>
          </Field.Root>
        </form>
        <Divider className="m-y-medium-60" />
        <section className="flex justify-end align-center g-medium-30">
          <Sheet.Trigger variant="ghost" sizing="small" onClick={handleCancel}>
            <span className="fs-medium-10">Close</span>
          </Sheet.Trigger>
          <Button
            variant="mono"
            sizing="small"
            disabled={isPending}
            onClick={() => {
              toast.loading("Updating library..", { id: "update-library" });

              mutate();
            }}
          >
            <span className="fs-medium-10">Save changes</span>
          </Button>
        </section>
      </Sheet>
    </Sheet.Root>
  );
}

export default LibraryDetailsSheet;
