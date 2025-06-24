"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@foundation-ui/components";
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
      <Button variant="ghost" sizing="small" onClick={() => router.push("/")}>
        <Icon>
          <PixelIcon.ChevronLeft />
        </Icon>
      </Button>

      <span className="opacity-default-10">|</span>

      {items.map((item) => (
        <span key={item.href} className="flex align-center g-medium-30">
          {item.isLastItem ? (
            <p className="fs-medium-10">{item.label}</p>
          ) : (
            <React.Fragment>
              <Button
                variant="ghost"
                sizing="small"
                onClick={() => router.push(item.href)}
              >
                {item.label}
              </Button>
              <span className="opacity-default-10">|</span>
            </React.Fragment>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumbs;
