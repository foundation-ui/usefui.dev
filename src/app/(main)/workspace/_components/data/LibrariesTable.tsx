"use client";

import React from "react";
import styled from "styled-components";

import Link from "next/link";

import { CardBody } from "@/components";
import { Badge, Table } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

import { format, formatDistanceToNow } from "date-fns";
import type { libraries_table as librariesSchema } from "@/server/db/schema";

const TableWrapper = styled(Table)`
  border: none !important;
`;

const TableLink = styled(Link)`
  display: table-row;

  text-decoration: none;
  background: transparent;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover,
  &:focus {
    background: var(--font-color-alpha-10) !important;
  }
`;

function LibrariesTable({
  libraries,
}: {
  libraries: (typeof librariesSchema.$inferSelect)[];
}) {
  return (
    <CardBody as={TableWrapper} className="w-100">
      <Table.Head>
        <Table.HeadCell className="p-l-medium-60 p-medium-60">
          <Icon opacity={0.6}>
            <PixelIcon.LabelAlt />
          </Icon>
          Name
        </Table.HeadCell>
        <Table.HeadCell>
          <Icon opacity={0.6}>
            <PixelIcon.Clock />
          </Icon>
          Created&nbsp;At
        </Table.HeadCell>
        <Table.HeadCell>
          <Icon opacity={0.6}>
            <PixelIcon.Timeline />
          </Icon>
          Last&nbsp;update
        </Table.HeadCell>
        <Table.HeadCell />
      </Table.Head>

      <Table.Body className="w-100">
        {libraries.map(
          (item: typeof librariesSchema.$inferSelect, key: number) => (
            <TableLink key={key} href={`workspace/library/${String(item.id)}`}>
              <Table.Cell className="p-l-medium-60 fs-medium-10">
                {item.name}
              </Table.Cell>
              <Table.Cell>
                <Badge variant="border">
                  {format(Number(item.createdAt), "dd/MM/yyyy")}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="border">
                  {item.updatedAt &&
                    formatDistanceToNow(new Date(Number(item.updatedAt)), {
                      addSuffix: true,
                      includeSeconds: true,
                    })}
                </Badge>
              </Table.Cell>
              <Table.Cell className="p-r-medium-60 flex justify-end align-center">
                <Icon>
                  <PixelIcon.Open />
                </Icon>
              </Table.Cell>
            </TableLink>
          ),
        )}
      </Table.Body>
    </CardBody>
  );
}

export default LibrariesTable;
