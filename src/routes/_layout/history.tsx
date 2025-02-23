import RideHistory from "@/pages/RideHistory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/history")({
  component: RideHistory,
});
