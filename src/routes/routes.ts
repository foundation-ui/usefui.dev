type AppRouteProperties = {
  label: string;
  key: string;
  path: string;
};

export const APP_ROUTES: AppRouteProperties[] = [
  {
    key: "libraries",
    label: "Libraries",
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
];
