"use client";

import React from "react";
import { Badge, Table } from "@foundation-ui/components";

function TableTemplate() {
  return (
    <div className="grid g-medium-30 p-t-large-30 p-x-medium-60">
      <Table className="w-100">
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Prop</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Default</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {[1, 2, 3].map((key) => (
            <Table.Row key={key}>
              <Table.Cell>
                <Badge variant="border">children</Badge>
              </Table.Cell>
              <Table.Cell>
                <Badge variant="border">ReactNode</Badge>
              </Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell className="opacity-default-10">v.0.0.0</Table.Cell>
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}

export default TableTemplate;
