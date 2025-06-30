import React from "react";

import DocsHeading from "../_components/DocsHeading";

import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface DocPageProps {
  params: Promise<{ slug: string[] }>;
}

// The page component is an async Server Component
export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const components = {};

  const docSlug = slug ?? ["index"];
  const doc = await getDocBySlug(docSlug);

  if (!doc) {
    return (
      <DocsHeading
        title="Not found"
        description="Looks like this documentation is missing."
      />
    );
  }

  return (
    <React.Fragment>
      <DocsHeading
        title={doc.frontmatter.title as string}
        description={doc.frontmatter.description as string}
      />

      <MDXRemote source={doc.content} components={components} />
    </React.Fragment>
  );
}
