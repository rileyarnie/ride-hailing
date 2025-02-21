import Loader from "@/components/loader/loader";
import { Button } from "@/components/ui/button";
import HomePage from "@/pages/HomePage";
import { getAvailableRides } from "@/queries/getRides";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

const ErrorComponent = ({ error }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    // Reset the query error boundary
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <div className="flex flex-col">
      Error: {error.message}
      <Button
        className="mt-4"
        onClick={() => {
          // Invalidate the route to reload the loader, and reset any router error boundaries
          router.invalidate();
        }}
      >
        retry
      </Button>
    </div>
  );
};

export const Route = createFileRoute("/_layout/")({
  component: HomePage,
  loader: async ({ context: { queryClient } }) => {
    // add 3 second delay to simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return queryClient.ensureQueryData(getAvailableRides);
  },
  errorComponent: ({ error, reset }) => (
    <ErrorComponent error={error} reset={reset} />
  ),
  pendingComponent: () => <Loader text="Loading available riders" />,
});
