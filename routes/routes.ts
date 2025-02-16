type AppRouteProperties = {
  label: string;
  key: string;
  path: string;
};

export const APP_ROUTES: AppRouteProperties[] = [
  {
    key: "engine",
    label: "Engine",
    path: "/",
  },
  {
    key: "templates",
    label: "Templates",
    path: "templates",
  },
  {
    key: "environments",
    label: "Environments",
    path: "environments",
  },
];
