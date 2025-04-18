"use client";

import React from "react";

import { Dialog, Divider, Portal } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import DeleteLibraryForm from "../forms/DeleteLibraryForm";

function DeleteAction({ libraryId }: { libraryId: number }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger variant="ghost" rawicon>
        <span className="fs-medium-10">Delete</span>

        <Icon width={18} height={18} fill="var(--color-red)">
          <PixelIcon.Delete />
        </Icon>
      </Dialog.Trigger>

      <Portal container="portal-container">
        <Dialog sizing="small">
          <hgroup className="flex align-start g-large-10">
            <div>
              <h6 className="fs-medium-30">Attention</h6>
              <p className="fs-medium-20 opacity-default-60">
                This action is permanent and cannot be reversed.
              </p>
            </div>
            <Icon width={24} height={24} fill="var(--color-red)">
              <PixelIcon.Alert />
            </Icon>
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
