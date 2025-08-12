"use client";

import React from "react";
import styled from "styled-components";

import { Badge, Table } from "@usefui/components";
import { TextMuted } from "@/components";

export interface TableProps {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
  defaultValue?: string;
  deprecated?: boolean;
}

const PropertyName = styled.span<{ $deprecated?: boolean }>`
  ${(props) =>
    props.$deprecated &&
    `
    text-decoration: line-through;
    color: var(--font-color-alpha-10);
  `}
`;

function DocsPropsTable({
  extended,
  properties,
}: {
  extended: boolean;
  properties: TableProps[];
}) {
  return (
    <Table className="w-100">
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Prop</Table.HeadCell>
          {extended && <Table.HeadCell>Description</Table.HeadCell>}
          <Table.HeadCell>Type</Table.HeadCell>
          {!extended && <Table.HeadCell>Default</Table.HeadCell>}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {properties.map((property, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <div className="flex align-center g-medium-30">
                <PropertyName
                  $deprecated={property.deprecated}
                  className="fs-medium-10"
                >
                  {property.name}
                </PropertyName>
                <div className="flex g-medium-30">
                  {property.required && <Badge variant="meta">Required</Badge>}
                  {property.deprecated && (
                    <Badge variant="error">Deprecated</Badge>
                  )}
                </div>
              </div>
            </Table.Cell>

            {extended && (
              <Table.Cell>
                <span className="fs-medium-10 opacity-default-60">
                  {property?.description}
                </span>
              </Table.Cell>
            )}

            <Table.Cell>
              <Badge variant="border">{property.type}</Badge>
            </Table.Cell>

            {!extended && (
              <Table.Cell>
                {property.defaultValue ? (
                  <Badge variant="border">{property.defaultValue}</Badge>
                ) : (
                  <TextMuted className="fs-medium-10 opacity-default-10">
                    —
                  </TextMuted>
                )}
              </Table.Cell>
            )}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default DocsPropsTable;
