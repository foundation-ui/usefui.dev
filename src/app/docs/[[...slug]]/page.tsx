import React from "react";

import DocsHeading from "../_components/DocsHeading";
import DocsCodePreview from "../_components/DocsCodePreview";
import DocsTextBlock from "../_components/DocsTextBlock";
import DocsLink from "../_components/DocsLink";
import DocsSection from "../_components/DocsSection";
import DocsPreview from "../_components/DocsPreview";
import DocsFooter from "../_components/DocsFooter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";
import AccordionTemplate from "../_components/_templates/AccordionTemplate";

export async function generateStaticParams() {
  const slugs = await getAllDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

interface DocPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;

  const docSlug = slug ?? ["index"];
  const doc = await getDocBySlug(docSlug);

  if (!doc) {
    return (
      <DocsHeading
        title="Not found"
        description="The page you are looking for does not exists."
      />
    );
  }

  const components = {
    // Docs components
    DocsCodePreview,
    DocsTextBlock,
    DocsLink,
    DocsPreview,
    DocsSection,
    DocsFooter,

    // Components templates
    AccordionTemplate,
  };

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
