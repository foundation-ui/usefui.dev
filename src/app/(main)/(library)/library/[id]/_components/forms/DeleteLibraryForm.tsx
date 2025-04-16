"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Button, Dialog, Field } from "@foundation-ui/components";

import { DeleteLibrary } from "@/server/actions";
import { toast } from "sonner";

function DeleteLibraryForm({ libraryId }: { libraryId: number }) {
  const router = useRouter();

  const [value, setValue] = React.useState<string>("");
  const deferredEditorValue = React.useDeferredValue(value);

  const { mutate, isPending } = useMutation({
    mutationFn: DeleteLibrary,
    onSuccess: () => {
      toast.success("Library deleted", { id: "delete-library" });
      router.push("/");
    },
    onError: () => {
      toast.error("Failed to delete library", { id: "delete-library" });
    },
  });

  const disableSubmit = isPending || deferredEditorValue !== String(libraryId);

  return (
    <React.Fragment>
      <form className="grid g-medium-30 m-b-medium-60">
        <Field.Root>
          <Field.Wrapper className="grid fs-medium-10">
            <Field.Label htmlFor="confirm_name">
              Type <b>{libraryId}</b> to confirm
            </Field.Label>
            <Field
              id="confirm_name"
              variant="secondary"
              sizing="medium"
              disabled={isPending}
              style={{ width: "auto" }}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Field.Wrapper>
        </Field.Root>
      </form>
      <section className="flex justify-end align-center g-medium-60">
        <Dialog.Trigger variant="ghost" sizing="small">
          <span className="fs-medium-10">Cancel</span>
        </Dialog.Trigger>
        <Button
          variant="primary"
          sizing="small"
          disabled={disableSubmit}
          onClick={() => {
            toast.loading("Deleting library..", { id: "delete-library" });
            mutate(libraryId);
          }}
        >
          <span className="fs-medium-10" style={{ color: "var(--body-color)" }}>
            Delete library
          </span>
        </Button>
      </section>
    </React.Fragment>
  );
}

export default DeleteLibraryForm;
