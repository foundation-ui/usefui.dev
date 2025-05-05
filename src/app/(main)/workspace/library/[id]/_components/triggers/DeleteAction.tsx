"use client";

import React from "react";

import { Dialog, Divider, Portal } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import DeleteLibraryForm from "../forms/DeleteLibraryForm";

function DeleteAction({ libraryId }: { libraryId: number }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger variant="secondary" sizing="large">
        <span className="fs-medium-10">Delete</span>

        <Icon>
          <PixelIcon.Delete />
        </Icon>
      </Dialog.Trigger>

      <Portal container="portal-container">
        <Dialog sizing="small">
          <hgroup>
            <h6 className="fs-medium-30">Attention</h6>
            <p className="fs-medium-20 opacity-default-60">
              This action is permanent and cannot be reversed.
            </p>
          </hgroup>
          <Divider className="m-y-medium-60" />
          <DeleteLibraryForm libraryId={libraryId} />
        </Dialog>
        <Dialog.Overlay closeOnInteract />
      </Portal>
    </Dialog.Root>
  );
}

export default DeleteAction;
