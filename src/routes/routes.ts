type AppRouteProperties = {
  label: string;
  key: string;
  path: string;
};

export const APP_ROUTES: AppRouteProperties[] = [
  {
    key: "library",
    label: "Library",
    path: "/",
  },
  {
    key: "integrations",
    label: "Integrations",
    path: "integrations",
  },
  {
    key: "history",
    label: "History",
    path: "history",
  },
  {
    key: "feedback",
    label: "Feedback",
    path: "feedback",
  },
  {
    key: "support",
    label: "Support",
    path: "support",
  },
];
