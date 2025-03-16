"use client";

import React from "react";

async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full justify-center items-center flex-col bg-background overflow-scroll p-6 py-12">
      {children}
    </main>
  );
}

export default layout;
