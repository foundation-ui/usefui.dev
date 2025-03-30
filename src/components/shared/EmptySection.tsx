"use client";

import React from "react";
import styled from "styled-components";

import { Badge } from "@foundation-ui/components";

type EmptySectionProps = {
  title: string;
  description: string;
  action: React.ReactNode;
  icon: React.ReactNode;
};

const EmptySectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

function EmptySection({ title, description, action, icon }: EmptySectionProps) {
  return (
    <EmptySectionWrapper className="h-auto">
      <Badge variant="secondary" className="h-auto m-b-medium-60 ">
        {icon}
      </Badge>

      <h1 className="fs-medium-20">{title}</h1>
      <p className="fs-medium-10 opacity-default-30 m-b-medium-60">
        {description}
      </p>

      {action}
    </EmptySectionWrapper>
  );
}

export default EmptySection;
