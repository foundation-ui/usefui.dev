"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button, Tooltip } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

interface BreadcrumbsProps {
  capitalizeItems?: boolean;
}

function Breadcrumbs({ capitalizeItems = true }: BreadcrumbsProps) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const items = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label = capitalizeItems
      ? segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      : segment.replace(/-/g, " ");

    const isLastItem = index === segments.length - 1;

    return {
      href,
      label,
      isLastItem,
    };
  });

  return (
    <div className="flex align-center g-medium-30">
      <Tooltip content="Home">
        <Button variant="ghost" sizing="small" onClick={() => router.push("/")}>
          <Icon>
            <PixelIcon.ChevronLeft />
          </Icon>
        </Button>
      </Tooltip>

      <span className="opacity-default-10 m-x-medium-30">|</span>

      {items.map((item) => (
        <p
          key={item.href}
          className={`fs-medium-10 ${item.isLastItem && "opacity-default-30"}`}
        >
          {item.label}
        </p>
      ))}
    </div>
  );
}

export default Breadcrumbs;
