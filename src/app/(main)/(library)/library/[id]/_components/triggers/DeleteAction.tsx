"use client";

import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { Spinner } from "@/components";
import { Button } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { DeleteMock } from "@/server/actions";
import { toast } from "sonner";

function DeleteAction({ libraryId }: { libraryId: number }) {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: DeleteMock,
    onSuccess: () => {
      toast.success("Library deleted", { id: "delete-library" });
      router.push("/");
    },
    onError: () => {
      toast.error("Failed to delete library", { id: "delete-library" });
    },
  });

  return (
    <Button variant="ghost" onClick={() => mutate(libraryId)} rawicon>
      <span className="fs-medium-10">Delete</span>

      {isPending ? (
        <Spinner data-variant="inner" />
      ) : (
        <Icon width={18} height={18} fill="var(--color-red)">
          <PixelIcon.Delete />
        </Icon>
      )}
    </Button>
  );
}

export default DeleteAction;
