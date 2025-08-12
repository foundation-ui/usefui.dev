"use client";

import React from "react";
import styled from "styled-components";

import EditorBody from "../editor/EditorBody";

import { Dialog, Page } from "@usefui/components";
import { Icon, PixelIcon } from "@usefui/icons";
import { DisplayMd } from "@/components";

import type { EditorSidebarProperties } from "../editor/EditorSidebar";

const DialogBody = styled(Dialog)`
  padding: 0 !important;
`;

type AnalyticsDialogProps = EditorSidebarProperties;
function AnalyticsDialog({ uba }: AnalyticsDialogProps) {
  return (
    <DialogBody sizing="large">
      <Page.Navigation className="flex align-center justify-between w-100">
        <div className="flex align-center g-medium-30">
          <DisplayMd className="fs-medium-10 opacity-default-60">
            User Behavior Analytics
          </DisplayMd>
        </div>
        <Dialog.Trigger variant="ghost">
          <Icon>
            <PixelIcon.Close />
          </Icon>
        </Dialog.Trigger>
      </Page.Navigation>

      <Page.Wrapper $navigations={1.9} $menus={0}>
        <EditorBody
          value={JSON.stringify(uba, null, 2)}
          readOnly
          language="json"
        />
      </Page.Wrapper>
    </DialogBody>
  );
}

export default AnalyticsDialog;
