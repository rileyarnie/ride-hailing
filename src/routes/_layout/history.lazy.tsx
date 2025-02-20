import RideHistory from "@/pages/RideHistory";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/history")({
  component: RideHistory,
});

// function RouteComponent() {
//   return <div>Hello "/_layout/history"!</div>;
// }
