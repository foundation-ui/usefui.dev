"use client";

import React from "react";
import styled from "styled-components";

import Link from "next/link";

import { DisplayXl, DisplayMd, GridLayout } from "@/components";
import { Badge, Button } from "@foundation-ui/components";
import { Icon, PixelIcon } from "@foundation-ui/icons";

export const CardBody = styled.article`
  --border: var(--measurement-small-10) solid var(--font-color-alpha-10);

  border: var(--border);

  &[data-mode="link"] {
    text-decoration: none;
    transition: all ease-in-out 0.2s;

    &:hover {
      background: var(--contrast-color);
    }
  }
`;
export const PatternBackground = styled.div`
  --dot-bg: var(--body-color);
  --dot-color: var(--font-color-alpha-30);

  --dot-size: var(--measurement-small-60);
  --dot-space: var(--measurement-medium-60);

  background: var(--body-color);

  background:
    linear-gradient(
        90deg,
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 100%
      )
      center / var(--dot-space) var(--dot-space),
    linear-gradient(
        var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
        transparent 100%
      )
      center / var(--dot-space) var(--dot-space),
    radial-gradient(var(--dot-color) 100%, transparent 100%) !important;
`;
export const CenteredWrapper = styled.hgroup`
  max-width: var(--breakpoint-tablet);
  margin: 0 auto;
  text-align: center;
`;

const WIKI_CATALOG = [
  {
    name: "foundation-ui/core",
    title: "Token Engine",
    description:
      "Dynamically generate design tokens based on your application properties.",
    link: "/docs/core",
  },
  {
    name: "foundation-ui/tokens",
    title: "Built-in Design Tokens",
    description:
      "Use all or parts of pre-built design tokens libraries within your application.",
    link: "/docs/tokens",
  },
  {
    name: "foundation-ui/components",
    title: "React Components",
    description:
      "Get fast and accessible components to enhance your UI development.",
    link: "/docs/components",
  },
  {
    name: "foundation-ui/analytics",
    title: "User Behavior Analytics",
    description:
      "Capture real-time user interactions and system insights and use it during development.",
    link: "/docs/analytics",
  },
];

function LandingProducts() {
  return (
    <section className="p-x-medium-60">
      <CenteredWrapper className="m-y-large-60 grid g-medium-60">
        <DisplayXl as="h3">
          Build Apps people love to use with Data&nbsp;Driven Tools optimized
          for fast development
        </DisplayXl>
      </CenteredWrapper>

      <GridLayout>
        {WIKI_CATALOG.map((item, key) => (
          <CardBody
            className="grid align-end w-100 p-large-10"
            as={Link}
            data-mode="link"
            href={item?.link}
            key={`${item?.link}-${key}`}
          >
            <header className="flex align-center justify-between m-b-large-60">
              <Icon>
                <PixelIcon.ArrowRight />
              </Icon>
            </header>

            <hgroup>
              <DisplayMd className="m-b-medium-30">{item?.title}</DisplayMd>
              <p className="fs-medium-20 opacity-default-60">
                {item?.description}
              </p>
            </hgroup>
          </CardBody>
        ))}
      </GridLayout>

      <CardBody
        className="p-y-large-10"
        as={PatternBackground}
        style={{ borderTop: "none", borderBottom: "none" }}
      />

      <GridLayout>
        <CardBody className="grid align-end h-100 w-100 p-large-10">
          <DisplayXl as="h3" className="m-b-large-10">
            Integrate with your favorite tools
          </DisplayXl>
        </CardBody>
        <CardBody
          className="grid align-end h-100 w-100 p-large-10"
          as={Link}
          data-mode="link"
          href="/docs/templates"
        >
          <p className="w-100 fs-medium-20  m-b-large-30">
            <span className="opacity-default-60">Foundation UI is</span>
            &nbsp;
            <b>
              built with Typescript and React. It can be used on any React-based
              framework
            </b>
            &nbsp;
            <span className="opacity-default-60">
              such as NextJS, ElectronJS and React Native.
            </span>
          </p>

          <hgroup className="flex align-center g-medium-30 justify-between">
            <Button variant="ghost">
              Browse templates
              <Icon>
                <PixelIcon.ArrowRight />
              </Icon>
            </Button>

            <div className="flex align-center g-medium-10">
              <Icon
                viewBox="-11.5 -10.23174 23 20.46348"
                height={24}
                width={24}
                fill="#61dafb"
              >
                <circle cx="0" cy="0" r="2.05" />
                <g strokeWidth="0.8" stroke="#61dafb" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </Icon>
              <Icon viewBox="0 0 32 32" height={24} width={24}>
                <path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z" />
              </Icon>
              <Icon viewBox="0 0 256 256" height={24} width={24}>
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2B2E3A" cx="128" cy="128" r="128" />
                  <g fill="#9FEAF9" fillRule="nonzero">
                    <path d="M100.502 71.69c-26.005-4.736-46.567.221-54.762 14.415-6.115 10.592-4.367 24.635 4.24 39.646a2.667 2.667 0 1 0 4.626-2.653c-7.752-13.522-9.261-25.641-4.247-34.326 6.808-11.791 25.148-16.213 49.187-11.835a2.667 2.667 0 0 0 .956-5.247zm-36.999 72.307c10.515 11.555 24.176 22.394 39.756 31.388 37.723 21.78 77.883 27.601 97.675 14.106a2.667 2.667 0 1 0-3.005-4.406c-17.714 12.078-55.862 6.548-92.003-14.318-15.114-8.726-28.343-19.222-38.478-30.36a2.667 2.667 0 1 0-3.945 3.59z" />
                    <path d="M194.62 140.753c17.028-20.116 22.973-40.348 14.795-54.512-6.017-10.423-18.738-15.926-35.645-16.146a2.667 2.667 0 0 0-.069 5.333c15.205.198 26.165 4.939 31.096 13.48 6.792 11.765 1.49 29.807-14.248 48.399a2.667 2.667 0 1 0 4.071 3.446zm-43.761-68.175c-15.396 3.299-31.784 9.749-47.522 18.835-38.942 22.483-64.345 55.636-60.817 79.675a2.667 2.667 0 1 0 5.277-.775c-3.133-21.344 20.947-52.769 58.207-74.281 15.267-8.815 31.135-15.06 45.972-18.239a2.667 2.667 0 1 0-1.117-5.215z" />
                    <path d="M87.77 187.753c8.904 24.86 23.469 40.167 39.847 40.167 11.945 0 22.996-8.143 31.614-22.478a2.667 2.667 0 1 0-4.571-2.748c-7.745 12.883-17.258 19.892-27.043 19.892-13.605 0-26.596-13.652-34.825-36.63a2.667 2.667 0 1 0-5.021 1.797zm81.322-4.863c4.61-14.728 7.085-31.718 7.085-49.423 0-44.179-15.463-82.263-37.487-92.042a2.667 2.667 0 0 0-2.164 4.874c19.643 8.723 34.317 44.866 34.317 87.168 0 17.177-2.397 33.63-6.84 47.83a2.667 2.667 0 1 0 5.09 1.593zm50.224-2.612c0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763 7.049 0 12.763-5.714 12.763-12.763zm-5.333 0a7.43 7.43 0 1 1-14.86 0 7.43 7.43 0 0 1 14.86 0zM48.497 193.041c7.05 0 12.764-5.714 12.764-12.763 0-7.049-5.715-12.763-12.764-12.763-7.048 0-12.763 5.714-12.763 12.763 0 7.049 5.715 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86z" />
                    <path d="M127.617 54.444c7.049 0 12.763-5.714 12.763-12.763 0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86zm1.949 93.382c-4.985 1.077-9.896-2.091-10.975-7.076a9.236 9.236 0 0 1 7.076-10.976c4.985-1.077 9.896 2.091 10.976 7.076 1.077 4.985-2.091 9.897-7.077 10.976z" />
                  </g>
                </g>
              </Icon>
              <Badge variant="border" shape="round">
                <small className="p-y-small-60">...</small>
              </Badge>
            </div>
          </hgroup>
        </CardBody>
      </GridLayout>

      <CardBody
        className="p-y-large-10 flex align-center justify-center"
        style={{ borderTop: "none" }}
        as={Link}
        data-mode="link"
        href="/docs/introduction"
      >
        <Button variant="ghost">
          Get started for free
          <Icon>
            <PixelIcon.ArrowRight />
          </Icon>
        </Button>
      </CardBody>
    </section>
  );
}

export default LandingProducts;
