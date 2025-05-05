"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { Badge, Button, Dialog, Field } from "@foundation-ui/components";

import { DeleteLibraryAction } from "@/server/actions";
import { toast } from "sonner";

function DeleteLibraryForm({ libraryId }: { libraryId: number }) {
  const router = useRouter();

  const [value, setValue] = React.useState<string>("");
  const deferredEditorValue = React.useDeferredValue(value);

  const { userId, isSignedIn } = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: () => handleDeleteLibrary(),
    onSuccess: () => {
      toast.success("Library deleted", { id: "delete-library" });
      router.push("/workspace");
    },
    onError: () => {
      toast.error("Failed to delete library", { id: "delete-library" });
    },
  });

  const handleDeleteLibrary = React.useCallback(async () => {
    if (!isSignedIn || !userId) {
      throw new Error(`[Unauthorized] - Sign In to delete libraries`);
    }

    return await DeleteLibraryAction(libraryId, userId);
  }, [isSignedIn, libraryId, userId]);

  const disableSubmit = isPending || deferredEditorValue !== String(libraryId);

  return (
    <React.Fragment>
      <form className="grid g-medium-30 m-b-large-10">
        <Field.Root>
          <Field.Wrapper className="grid fs-medium-10">
            <Field.Label htmlFor="confirm_name">
              Type <Badge variant="secondary">{libraryId}</Badge> to confirm
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
          sizing="large"
          disabled={disableSubmit}
          onClick={() => {
            toast.loading("Deleting library..", { id: "delete-library" });
            mutate();
          }}
        >
          Delete library
        </Button>
      </section>
    </React.Fragment>
  );
}

export default DeleteLibraryForm;
