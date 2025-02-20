import HomePage from "@/pages/HomePage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/")({
  component: HomePage,
});

// function RouteComponent() {
//   return <div>Hello "/_layout/"!</div>
// }
