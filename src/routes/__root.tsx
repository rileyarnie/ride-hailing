import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
  }
);

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      {import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
      <Toaster />
    </React.Fragment>
  );
}
